
export type ReviewSource = 'facebook' | 'google';

export interface Review {
  id: string;
  author: string;
  avatar: string;
  comment: string;
  source: ReviewSource;
}
