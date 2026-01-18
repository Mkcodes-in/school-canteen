export interface Students {
    id: string;
    name: string;
    referralCode: string;
}
export type CreateStudent = Omit<Students, "id">;