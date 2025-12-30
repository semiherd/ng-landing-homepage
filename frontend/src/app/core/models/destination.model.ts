
export type Activity =
  | 'culture'
  | 'sports'
  | 'food'
  | 'nightlife'
  | 'history'
  | 'beach'
  | 'nature';

export interface Destination {
  id: string;
  label: string;
  country: string;
  activities: Activity[];
  images: string[];
}
