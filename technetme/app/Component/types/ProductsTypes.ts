export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  fullDescription: string;
  features: string[];
}

export interface Cart {
  [productId: string]: number;
}