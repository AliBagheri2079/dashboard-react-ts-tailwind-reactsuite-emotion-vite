import { useRef } from 'react';

const Cookie = () => {
  const cookieElm = useRef<HTMLDivElement>(null);

  const handleCookie = () => cookieElm.current?.classList.add('hidden');

  return (
    <>
      <div
        ref={cookieElm}
        className="fixed bottom-0 right-0 z-[60] sm:max-w-xl w-full mx-auto p-6"
      >
        {/*  Card  */}
        <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="grid sm:flex sm:items-center gap-y-3 sm:gap-y-0 sm:gap-x-5">
            <div className="sm:max-w-sm">
              <h2 className="text-gray-500">
                <span className="font-semibold text-gray-800 dark:text-gray-200">
                  We use cookies
                </span>{' '}
                to analyze our traffic and create a smooth user experience.
              </h2>
            </div>
            <div className="inline-flex gap-x-2">
              <div>
                <button
                  type="button"
                  onClick={handleCookie}
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
                >
                  Reject
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={handleCookie}
                  className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
        {/*  End Card  */}
      </div>
    </>
  );
};

export default Cookie;
