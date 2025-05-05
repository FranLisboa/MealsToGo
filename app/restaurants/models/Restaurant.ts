export default class Restaurant {
  name: string = "";
  photos: string[] = [];
  addess?: string = "";
  isOpenNow?: boolean = true;
  rating?: number = 5;

  constructor({
    name,
    photos = [],
    address,
    isOpenNow,
    rating,
  }: {
    name: string;
    photos?: string[];
    address?: string;
    isOpenNow?: boolean;
    rating?: number;
  }) {
    this.name = name;
    this.photos = photos;
    this.addess = address;
    this.isOpenNow = isOpenNow;
    this.rating = rating;
  }
}
