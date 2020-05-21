export interface Product {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
  types: [
    {
      type: string;
      price: number;
    },
    {
      type: string;
      price: number;
    },
    {
      type: string;
      price: number;
    }
  ];
  reviews: number;
  reviewers: [];
}
