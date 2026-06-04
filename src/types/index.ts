export interface Product {
  id: string;
  name: string;
  category:
  | "chairs"
  | "tables"
  | "canopies"
  | "decor"
  | "lighting"
  | "generators"
  | "catering";

  description: string;

  pricePerDay: number;

  minimumOrderQty: number;

  images: string[];

  specifications?: {
    dimensions?: string;
    capacity?: string;
    colorOptions?: string[];
  };

  availability: "available" | "limited" | "call-us";

  featured?: boolean;
  //   e.g {
  //     id: "chair-001",
  //     name: "Gold Chiavari Chair",
  //     category: "chairs",
  //     description: "Elegant gold chair suitable for weddings and receptions.",
  //     pricePerDay: 1500,
  //     minimumOrderQty: 50,
  //     images: ["/images/chair1.webp"],
  //     availability: "available",
  //     featured: true
  //   }
}



export interface Quote {
  productId: string;
  productName: string;
  quantity: number;
  pricePerDay: number;
}


export interface QuoteRequest {
  fullName: string;

  phoneNumber: string;

  email?: string;

  eventDate: string;

  eventLocation: string;

  itemsRequested: string;

  additionalNotes?: string;

  referralSource?: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}


export interface Testimonial {
  id: string;
  name: string;
  eventType: string;
  rating: number;
  review: string;
}