import { BaseTimeStampModel } from "./base/base-time-stamp-model";


export interface User extends BaseTimeStampModel<number> {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    imageUrl: string | null;
}

