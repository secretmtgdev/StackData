export type Sale = {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
}

export type Review = {
    customer: string;
    review: string;
    score: number;
}

export type ProductSummary = {
    title: string;
    image: string;
    subtitle: string;
    tags: Array<string>
}

export type ProductInformation = ProductSummary & {
    id: string;
    brand: string;
    reviews: Array<Review>;
    retailer: string;
    details: Array<string>;
    sales: Array<Sale>;
}