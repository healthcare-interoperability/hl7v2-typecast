import { XTN } from "@healthcare-interoperability/hl7v2-datatypes";
import { HL7DataTypeCast } from "./HL7DataTypeCast";

export class TypeCastXTN extends HL7DataTypeCast {
    constructor(dataInstance) {
        super(dataInstance);
    }

    typecast() {
        if (this.dataInstance instanceof XTN) {
            return this.dataInstance;
        } else {
            throw new Error(`Unsupported type for typecasting. Only XTN is supported.`);
        }
    }
}
