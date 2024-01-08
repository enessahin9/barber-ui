import { TimeStampRepository } from "./time-stamp-repository";

export interface Product extends TimeStampRepository {
    catregoryId: number;
    name: string | null;
    description: string | null;
    tags: string | null;
    price: number | null;
    isActive: boolean | null;
}