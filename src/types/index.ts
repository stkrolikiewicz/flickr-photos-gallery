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