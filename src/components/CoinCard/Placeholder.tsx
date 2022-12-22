export default function CoinCardPlaceholder() {
  return (
    <div className="flex">
      {[1, 2, 3].map((num) => (
        <div
          key={num}
          role="status"
          className="mx-2 p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          {/* header part */}
          <div className="flex items-center space-x-3">
            <svg
              className="w-14 h-14 text-gray-200 dark:text-gray-700"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div>
              <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
              <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
            </div>
          </div>

          {/* chart part */}
          <div className="flex items-baseline my-10 space-x-6">
            <div className="w-full h-48 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full h-32 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full h-40 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full h-36 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full h-40 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full h-32 bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
          </div>

          {/* footer part */}
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
}
