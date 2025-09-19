export interface Section {
  id: string;
  label: string;
}

export interface Review {
  id: number;
  name: string;
  case: string;
  text: string;
}

export interface PricingPlan {
  title: string;
  price: string;
  desc: string;
}
