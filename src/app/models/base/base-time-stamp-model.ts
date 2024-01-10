import { BaseModel } from "./base-model";

export interface BaseTimeStampModel<T> extends BaseModel<T> {
    createdAt: string | null;
    createdUser: string | null;
    updatedAt: string | null;
    updatedUser: boolean | null;
    isUpdated: boolean | null;
    deletedAt: string | null;
    deletedUser: number | null;
    isDeleted: boolean | null;

}