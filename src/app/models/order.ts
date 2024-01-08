import { BaseModel } from "./base/base-model";
import { Product } from "./product";

export interface Order extends BaseModel<number> {
    fullName: string | null;
    phoneNumber: string | null;
    email: string | null;
    cargoBranch: string | null;
    sendDate: string | null;
    sendCode: string | null;
    canceledAt: string | null;
    canceledUser: number | null;
    isSend: boolean | null;
    isCancel: boolean | null;
}

export interface OrderWithProduct extends Order {
    products: Product[]
    amount: number;
}