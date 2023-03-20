export interface Photo {
  id: string,
  owner: string,
  secret: string,
  server: string,
  farm: number,
  title: string,
  ispublic: boolean,
  isfriend: boolean,
  isfamily: boolean
}

export interface PhotoInfo extends Photo {
  date: string,
  description?: string
}

export interface Response {
  photos?: Photos
  stat: string
  code: number
  message?: string
}

export interface Photos {
  page: number
  pages:number
  perpage: number
  photo: Photo[]
  total: number
}

export type Direction = "next" | "previous" | ""