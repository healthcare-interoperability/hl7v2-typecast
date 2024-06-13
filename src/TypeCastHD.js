import { PrimitiveDataType } from '@healthcare-interoperability/hl7v2-core';
import { HD } from '@healthcare-interoperability/hl7v2-datatypes';
import { HL7DataTypeCast } from "./HL7DataTypeCast";

export class TypeCastHD extends HL7DataTypeCast {
    constructor(dataInstance) {
        super(dataInstance);
    }

    typecast(version) {
        if (this.dataInstance instanceof HD) {
            return this.dataInstance;
        } else if (this.dataInstance instanceof PrimitiveDataType) {
            return new HD(this._handlePrimitiveData(), this._prepareConfigs(version));
        } else {
            throw new Error(`Unsupported type for typecasting. Only HD and PrimitiveType are supported.`);
        }
    }
}