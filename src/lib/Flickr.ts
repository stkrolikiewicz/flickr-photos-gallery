export const getDogsPhotos = async () => {
  const res = await fetch("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=06fe421ea76dcc08939e8e4202b4d933&text=dogs&format=json&nojsoncallback=1", {
    method: "GET",
  }).then(res => res.json()).then(res => res.photos).then(res => res.photo).catch(error => new Error(error))
  return res;
}