export interface Categories {
    categories: Category[];
}

export interface Category {
    id: number;
    name: string;
    slug: string;
    index: boolean;
    children: Category[] | null;
}
