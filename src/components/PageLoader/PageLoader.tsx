import Loader from "../Loader/Loader";

const PageLoader = () => {
  return (
    <div className="fixed flex justify-center h-screen w-screen top-0 left-0 items-center">
      <Loader />
    </div>
  )
}

export default PageLoader