import { CX } from "@healthcare-interoperability/hl7v2-datatypes";
import { HL7DataTypeCast } from "./HL7DataTypeCast";
import { PrimitiveDataType } from "@healthcare-interoperability/hl7v2-core";


export class TypeCastCX extends HL7DataTypeCast {
    constructor(dataInstance) {
        super(dataInstance);
    }

    typecast(version) {
        if (this.dataInstance instanceof CX) {
            return this.dataInstance;
        } else if (this.dataInstance instanceof PrimitiveDataType) {
            return new CX(this._handlePrimitiveData(), this._prepareConfigs(version));
        } else {
            throw new Error(`Unsupported type for typecasting. Only CX is supported.`);
        }
    }
}