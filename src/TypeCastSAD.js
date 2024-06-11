import { PrimitiveDataType } from "@healthcare-interoperability/hl7v2-core";
import { HL7DataTypeCast } from "./HL7DataTypeCast";
import { SAD } from "@healthcare-interoperability/hl7v2-datatypes";

export class TypeCastSAD extends HL7DataTypeCast {
    constructor(dataInstance) {
        super(dataInstance);
    }

    typecast(version) {
        if (this.dataInstance instanceof SAD) {
            return this.dataInstance;
        } else if (this.dataInstance instanceof PrimitiveDataType) {
            return new SAD(this._handlePrimitiveData(), this._prepareConfigs(version));
        } else {
            throw new Error(`Unsupported type for typecasting. Only SAD and PrimitiveType are supported.`);
        }
    }
}