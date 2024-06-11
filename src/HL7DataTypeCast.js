
import { ComplexDataType, PrimitiveDataType } from "@healthcare-interoperability/hl7v2-core";

/**
 * Represents a class for casting HL7 data types.
 */
export class HL7DataTypeCast {
    /**
     * Constructs a new HL7DataTypeCast instance.
     * @param {ComplexDataType|PrimitiveDataType} dataInstance - The data instance to cast.
     * @throws {Error} If the data instance type is not valid.
     */
    constructor(dataInstance) {
        if (dataInstance instanceof ComplexDataType || dataInstance instanceof PrimitiveDataType) {
            this.dataInstance = dataInstance;
            this.dataTypeVersion = dataInstance.version;
            this.primitiveIndex = 0;
        } else {
            throw new Error(`Invalid data instance type. Expected ComplexType or PrimitiveType.`);
        }
    }

    /**
     * Sets the primitive index.
     * @param {number} primitiveIndex - The index of the primitive data.
     * @returns {HL7DataTypeCast} The updated HL7DataTypeCast instance.
     */
    setPrimitiveIndex(primitiveIndex) {
        this.primitiveIndex = primitiveIndex;
        return this;
    }

    /**
     * Handles primitive data and converts it to an array.
     * @returns {Array} An array containing the primitive data.
     * @private
     */
    _handlePrimitiveData() {
        let data = [];
        data[this.primitiveIndex] = this.dataInstance.toString();
        return data;
    }

    /**
     * Prepares configuration for typecasting.
     * @param {string} version - The version of the data type.
     * @returns {Object} Configuration object.
     * @private
     */
    _prepareConfigs(version) {
        return {
            version: version ?? this.dataTypeVersion
        };
    }

    /**
     * Performs typecasting.
     * @param {string} version - The version to typecast to.
     */
    typecast(version) {
        return this.dataInstance;
    }
}