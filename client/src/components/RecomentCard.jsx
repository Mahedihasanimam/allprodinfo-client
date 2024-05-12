const RecomentCard = ({ recoitem }) => {
  const {
    queryid,
    queryTitle,
    recomentTitle,
    ProductName,
    userEmail,
    userName,
    RecommenderEmail,
    RecommenderName,
    details,
    CurrentTimeStamp,
    recomenderPhoto,
    recomendProduct
  } = recoitem;
  return (
    <div className="flex ">
        <div>
        <img
            className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            src={recomenderPhoto}
            alt="avatar"
          />
        </div>
      <div className="max-w-2xl px-8 py-4 border-2  rounded-lg shadow-md dark:bg-gray-800 my-8">
        <div className="flex items-center">
         
          <div>
            <p
              className="font-bold  cursor-pointer dark:text-gray-200"
              tabindex="0"
              role="link"
            >
              {RecommenderName}
            </p>
            <span className="text-sm font-light  dark:text-gray-400">
              {CurrentTimeStamp}
            </span>
          </div>
        </div>

        <div className="mt-2">
          <p
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline"
            tabindex="0"
            role="link"
          >
            {recomentTitle}
          </p>
          <p className="mt-2 text-gray-600 dark:text-gray-300">{details}</p>
        </div>

        <div className="flex items-center justify-between mt-4">
         <img src={recomendProduct} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RecomentCard;
