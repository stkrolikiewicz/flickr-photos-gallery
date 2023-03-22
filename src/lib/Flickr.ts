import { Photo, PhotoInfo } from "~/types"

const API_KEY = process.env.API_KEY

export const getDogsPhotos = async () => {
  const res = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&text=dogs&format=json&nojsoncallback=1`, {
    method: "GET",
  }).then(res => res.json()).then(res => res.photos).then(res => res.photo).catch(error => new Error(error))

  await res.sort((a: Photo, b: Photo) => {
    return a.id.localeCompare(b.id);
  });

  return res
}

export const getPhotoInfoById = async (id: string): Promise<PhotoInfo> => {
  const res = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=${API_KEY}&photo_id=${id}&format=json&nojsoncallback=1`, {
    method: "GET",
  }).then(res => res.json()).then(res => res.photo).catch(error => new Error(error))

  return {
    id: res.id,
    server: res.server,
    secret: res.secret,
    owner: res.owner.username,
    date: res.dates.taken.slice(0, 10),
    title: res.title._content,
    description: res.description._content
  }
}

export const getAllPhotosIds = async () => {
  const res = await getDogsPhotos()

  return res.map((photo: Photo) => {
    return { params: {
        id: photo.id
      }
    }
  })
}