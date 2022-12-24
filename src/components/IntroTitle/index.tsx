import { useState } from 'react';
import { Arrow, Star } from '../Icons';

const IntroTitle = () => {
  const [descriptionItems] = useState<{ id: number; item: string }[]>([
    { id: 1, item: 'Industry-leading design' },
    { id: 2, item: 'Developer community support' },
    { id: 3, item: 'Simple and affordable' },
  ]);

  const [avatarImages] = useState<{ id: number; item: string; alt: string }[]>([
    {
      id: 1,
      item: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80',
      alt: 'avatar one ...',
    },
    {
      id: 2,
      item: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80',
      alt: 'avatar two ...',
    },
    {
      id: 3,
      item: 'https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80',
      alt: 'avatar three ...',
    },
  ]);

  return (
    <div>
      {/* header */}
      <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl lg:leading-tight dark:text-white">
        Hire us
      </h1>
      <p className="mt-1 md:text-lg text-gray-800 dark:text-gray-200">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam quae quia
        nesciunt provident reiciendis dolorem.
      </p>

      {/* description */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          What can I expect?
        </h2>

        <ul className="mt-2 space-y-2">
          {descriptionItems.map(({ id, item }) => (
            <li key={id} className="flex space-x-3">
              <Arrow />
              <span className="text-gray-600 dark:text-gray-400">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex items-center gap-x-5">
        {/*  Avatar Group  */}
        <div className="flex -space-x-2">
          {avatarImages.map(({ id, item, alt }) => (
            <img
              key={id}
              className="inline-block h-8 w-8 rounded-full ring-2 ring-white dark:ring-gray-800"
              src={item}
              alt={alt}
            />
          ))}

          <span className="inline-flex justify-center items-center h-8 w-8 rounded-full bg-blue-600 text-white ring-2 ring-white">
            <Star />
          </span>
        </div>
        {/*  End Avatar Group  */}
        <span className="text-sm text-gray-500">
          Trusted by over 37k customer
        </span>
      </div>
    </div>
  );
};

export default IntroTitle;
