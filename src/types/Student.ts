import type { SnacksProps } from "./Snack";

export interface Students {
    id: number;
    name: string;
    referralCode: string;
    orders: SnacksProps[];
}