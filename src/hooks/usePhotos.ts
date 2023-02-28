import useSWR from "swr"
import { fetcher } from "~/lib/swr"
import { Response } from "~/types"

export const usePhotos = (index: number) => {
  const swr = useSWR<Response>(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=06fe421ea76dcc08939e8e4202b4d933&text=dogs&format=json&nojsoncallback=1&page=${index}&per_page=100`, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  swr.data?.photos?.photo.sort((a, b) => {
    return a.id.localeCompare(b.id);
  });

  return {
    data: swr.data?.photos,
    isLoading: swr.isLoading,
    isValidating: swr.isValidating,
    error: swr.error
  }
}

export default usePhotos