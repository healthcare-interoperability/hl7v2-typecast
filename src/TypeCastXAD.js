import { XAD } from "@healthcare-interoperability/hl7v2-datatypes";
import { HL7DataTypeCast } from "./HL7DataTypeCast";

export class TypeCastXAD extends HL7DataTypeCast {
    constructor(dataInstance) {
        super(dataInstance);
    }

    typecast() {
        if (this.dataInstance instanceof XAD) {
            return this.dataInstance;
        } else {
            throw new Error(`Unsupported type for typecasting. Only XAD is supported.`);
        }
    }
}