export interface Product {
  id: string;
  name: string;
  hindiName: string;
  category: 'saree' | 'readymade';
  price: string;
  originalPrice?: string;
  description: string;
  image: string;
  tag: string;
  features: string[];
}
