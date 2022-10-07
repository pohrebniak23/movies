export interface IQueryLatestContent {
  category: string,
  limit: number
}

export interface IQueryContentByCategory {
  category: string,
  year: {
    min: number,
    max: number
  },
  rating: {
    min: number,
    max: number
  },
  genre: string,
  limit: number
}