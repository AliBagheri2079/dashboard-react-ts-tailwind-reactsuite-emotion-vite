import { FC, FormEvent } from 'react';
import { useRouter } from '@tanstack/react-router';

import LoginModal from '../LoginModal';
/*
  ? you can use usehooks-ts library instead of custom hook
  import { useLocalStorage } from 'usehooks-ts';
*/
import useLocalStorage from '@/hooks/useLocalStorage';

type InputProp = {
  type: string;
  id: string;
  labelTag: string;
  autoComplete?: string;
};

const Input: FC<InputProp> = ({
  type,
  id,
  labelTag,
  autoComplete = 'none',
}) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm capitalize text-gray-700 font-medium dark:text-white"
      >
        {labelTag}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
        autoComplete={autoComplete}
      />
    </>
  );
};

const SignForm = () => {
  const [, setLoggedin] = useLocalStorage('logged', false);
  const router = useRouter();

  const handleRegisterUser = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoggedin((prevValue: boolean) => !prevValue);
    router.history.replace('/');
  };

  return (
    <div className="relative">
      {/*  Card  */}
      <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Fill in the form
        </h2>

        <form onSubmit={(e) => handleRegisterUser(e)}>
          <div className="mt-6 grid gap-4 lg:gap-6">
            {/*  User Name  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div>
                <Input
                  type="text"
                  labelTag="First Name"
                  id="hs-firstname-hire-us-1"
                />
              </div>

              <div>
                <Input
                  type="text"
                  labelTag="Last Name"
                  id="hs-firstname-hire-us-1"
                />
              </div>
            </div>

            {/*  User Email  */}
            <div>
              <Input
                type="email"
                labelTag="Work Email"
                id="hs-work-email-hire-us-1"
                autoComplete="email"
              />
            </div>

            {/*  User Password  */}
            <div>
              <Input
                type="password"
                labelTag="Password"
                id="hs-password-hire-us-1"
              />
            </div>

            {/* Details Textarea */}
            <div>
              <label
                htmlFor="hs-about-hire-us-1"
                className="block text-sm text-gray-700 font-medium dark:text-white"
              >
                Details
              </label>
              <textarea
                id="hs-about-hire-us-1"
                name="hs-about-hire-us-1"
                rows={4}
                className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              ></textarea>
            </div>
          </div>

          {/*  Checkbox  */}
          <div className="mt-3 flex">
            <div className="flex">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="shrink-0 mt-1.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
              />
            </div>
            <div className="ml-3">
              <label
                htmlFor="remember-me"
                className="text-sm text-gray-600 dark:text-gray-400"
              >
                By submitting this form I have read and acknowledged the{' '}
                <a
                  className="text-blue-600 decoration-2 hover:underline font-medium"
                  href="#"
                >
                  Privact policy
                </a>
              </label>
            </div>
          </div>

          {/*  Submit Button  */}
          <div className="mt-6 grid">
            <button
              type="submit"
              className="inline-flex justify-center items-center my-1 gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
            >
              Sign Up
            </button>

            {/*  Login Modal  */}
            <LoginModal register={handleRegisterUser} />
          </div>
        </form>

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            We&apos;ll get back to you in 1-2 business days.
          </p>
        </div>
      </div>
      {/*  End Card  */}
    </div>
  );
};

export default SignForm;
