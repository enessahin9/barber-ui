import { BaseModel } from "./base/base-model";

export interface Leave extends BaseModel<number> {
    userId: string;
    startDate: string | null;
    endDate: string | null;
}