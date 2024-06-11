import { PrimitiveDataType } from "@healthcare-interoperability/hl7v2-core";
import { TS } from "@healthcare-interoperability/hl7v2-datatypes";
import { HL7DataTypeCast } from "./HL7DataTypeCast";


export class TypeCastTS extends HL7DataTypeCast {
    constructor(dataInstance) {
        super(dataInstance);
    }

    typecast(version) {
        if (this.dataInstance instanceof TS) {
            return this.dataInstance;
        } else if (this.dataInstance instanceof PrimitiveDataType) {
            return new TS(this._handlePrimitiveData(), this._prepareConfigs(version));
        } else {
            throw new Error(`Unsupported type for typecasting. Only CE and PrimitiveType are supported.`);
        }
    }
}