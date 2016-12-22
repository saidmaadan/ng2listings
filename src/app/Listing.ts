export interface Listing{
  $key?: string;
  title?: string;
  description?: string;
  address?: string;
  city?: string;
  type: string;
  number_of_floors?: number;
  property_type?: string;
  price?: string;
  beds?: number;
  baths?: number;
  posted_at: string;
  image?: string;

}