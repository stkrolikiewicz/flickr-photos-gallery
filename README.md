# Flickr Photos Gallery

## Intro

A simple photos gallery built in Next.js based on Flickr's public API.

Layout inspiration: [https://dribbble.com/shots/6803742-Online-gallery-preview](https://dribbble.com/shots/6803742-Online-gallery-preview)

Deployment: [https://flickr-photos-gallery.vercel.app/](https://flickr-photos-gallery.vercel.app/)

## Technologies

- Next.js v13.1.6
- TypeScript v4.9.5
- TailwindCSS v3.2.7
- ESLint v8.34.0
- Flickr's public API
- pnpm

## Summary

### Required features:

-   <b>DONE</b> <s>get the first 100 photos of dogs</s>
-   <b>DONE</b> <s>a way to fetch more images (for example a button "Fetch more" on the bottom of a list that will fetch more elements on click)</s>
-   <b>DONE</b> <s>add an option to display photo captions – author, date, and description</s>
    - The solution could be different and much easier using only one search endpoint that incudes argument "extras=description,date_taken" . I've provided a solution which uses another method: flickr.photos.getInfo. Unfortunetely, I realised about my mistake, which costed me a lot of unnecessary energy, at the final stage of project development. My solution also caused unefficient way of displaying photo captions: creating dynamic route for each photo using getStaticPaths, instead of displaying photo captions on the home page e.g. following the design [https://dribbble.com/shots/6803742-Online-gallery-preview](https://dribbble.com/shots/6803742-Online-gallery-preview)
-   <b>DONE</b> <s>implement visible error & loading handling from both engineering and user perspectives</s>
-   <b>DONE</b> <s>the application should use Hooks whenever possible</s> – [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html)
    [https://usehooks-ts.com/react-hook/use-map](https://usehooks-ts.com/react-hook/use-map)

### Optional features for extra points:

-   <b>DONE</b> <s>allow adding images to favorites (list should be available after page refresh - be creative)</s>
-   <b>DONE</b> <s>implement neat design like [https://dribbble.com/shots/6803742-Online-gallery-preview](https://dribbble.com/shots/6803742-Online-gallery-preview)</s>
-   <b>DONE</b> <s> add infinite scroll</s>
-   add the ability to see author’s other pictures
    - I would've create a method called getAuthorsOtherPictures(id: string) that uses onwer_name as a id parameter. The endpoint inside a fetcher could look like this: "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=842223564a15398f1cb603e8cd70e037&user_id=${id}=&format=json&nojsoncallback=1"
-   allow searching for photos of dogs (remember about debounce!)
    - I would create SearchTerm and  SetSearchTerm contexts inside of SearchContextProvider, which will pass state of searchTerm to SearchInput component, which would be used inside of Header component. The debounce imported from debounce.lodash would be implemented inside the PhotosList and manipulate Array of photos display inside of PhotosRow/PhotosColumn components.
-   filters based on parameters: date, license, and more
    - Adding filters to the photos would have been based on manipulating (adding/removing) arguments such as lisense, max_date_take, min_date_taken etc. on a request using flickr.photos.search method.
-   <b>DONE</b> <s>add images lazy loading</s>
-   <b>DONE</b> <s>add some tests for any component</s>
-   show map of dogs photos using geolocation:
    - In order to solve this task I would have created a method called e.g. getPhotoGeolocationById(id: string) that fetch geolocation info about a photo using flickr.photos.geo.getLocation method which returns longtitude, latitude and accuracy. Use e.g. static map url as a Image src "https://maps.googleapis.com/maps/api/staticmap?size=400x400&markers=markerStyles|markerLocation1| markerLocation2|&key=MY_API_KEY" where the fetched locations are used as markers.
    - Another and better option would be using data fetched from the search main endpoint modified by "extras=geo" ("extras=description,date_taken,geo").
-   server side rendering with a cache of 60 seconds
    - In order to implement server side rendering with cache of 60 seconds I would have added refreshInterval: 60 * 1000 option to useSWR hook inside of usePhotos hook.
-   <b>DONE</b> <s>add animations</s>
-   consider SEO aspects assuming that you own Flickr service
    - Use Static Site Generation or Server-Side Rendering
    - Use semantic, logical  and consistent structure of URLs
    - Remember about Metadata e.g. implementing titles and descriptions of pages that includes keywords
    - Improve Core Web Vital by Automatic Image Optimization
    - Require API users to create backlinks inside their projects to increase popularity and make service more trustable
-   <b>DONE</b> <s>add page navigation animations</s>
-   <b>DONE</b> <s>responsive designs</s>
-   <b>DONE</b> <s>add rules for eslint & prettier and use them in the whole project to make it consistent</s>
-   <b>DONE</b> <s>use typescript for the whole project – please remember to limit the number of general types like Object, Function or `any` to a minimum.</s>
-   <b>DONE</b> <s>use [https://vercel.com/](https://vercel.com/) or any other hosting to host the app and make it publicly accessible</s>
-   <b>DONE</b> <s>use Next 13</s>
-   <b>DONE</b> <s>use some of the S tier libraries: [https://2022.stateofjs.com/en-US/libraries/](https://2022.stateofjs.com/en-US/libraries/)</s>
