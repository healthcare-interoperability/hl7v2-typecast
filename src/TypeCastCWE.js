import { PrimitiveDataType, ComplexDataType } from "@healthcare-interoperability/hl7v2-core";
import { CE, CNE, CWE } from "@healthcare-interoperability/hl7v2-datatypes";
import { HL7DataTypeCast } from "./HL7DataTypeCast";

/**
 * Represents a class for casting CWE data type.
 */
export class TypeCastCWE extends HL7DataTypeCast {
    /**
     * Constructs a new TypeCastCWE instance.
     * @param {ComplexDataType|PrimitiveDataType} dataInstance - The data instance to cast.
     */
    constructor(dataInstance) {
        super(dataInstance);
    }

    /**
     * Performs typecasting to CWE.
     * @param {string} version - The version to typecast to.
     * @returns {CWE} The typecasted CWE instance.
     * @throws {Error} If typecast is not supported.
     */
    typecast(version) {
        if (this.dataInstance instanceof CWE) {
            return this.dataInstance;
        } else if (this.dataInstance instanceof CE) {
            return new CWE(this.dataInstance.toJSON(), this._prepareConfigs(version));
        } else if (this.dataInstance instanceof CNE) {
            return new CWE(this.dataInstance.toJSON(), this._prepareConfigs(version));
        } else if (this.dataInstance instanceof PrimitiveDataType) {
            return new CWE(this._handlePrimitiveData(), this._prepareConfigs(version));
        } else {
            throw new Error(`Unsupported type for typecasting. Only CE and PrimitiveType are supported.`);
        }
    }
}