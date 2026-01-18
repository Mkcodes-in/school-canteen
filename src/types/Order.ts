export interface Order {
    createdAt: string;
    studentId: string;
    products: Product[], 
    totalAmount: number;
    id: string;
}

export interface Product{
    price: number;
    productId: string;
    quantity: number;
    title: string;
}