import { XCN, XPN } from "@healthcare-interoperability/hl7v2-datatypes";
import { HL7DataTypeCast } from "./HL7DataTypeCast";

export class TypeCastXCN extends HL7DataTypeCast {
    constructor(dataInstance) {
        super(dataInstance);
    }

    typecast(version) {
        if (this.dataInstance instanceof XCN) {
            return this.dataInstance;
        } else if (this.dataInstance instanceof XPN) {
            return new XCN(this.dataInstance.toJSON(), this._prepareConfigs(version));
        } else {
            throw new Error(`Unsupported type for typecasting. Only XPN is supported.`);
        }
    }
}