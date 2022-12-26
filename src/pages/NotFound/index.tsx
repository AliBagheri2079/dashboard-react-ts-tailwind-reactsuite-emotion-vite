import { Helmet } from 'react-helmet';

import SVG from '../../components/SVG';
import './index.css';

const NotFound = () => {
  return (
    <main className="not-found">
      <Helmet>
        <title>404 Error</title>
      </Helmet>

      <header className="">
        <nav className="" aria-label="Global">
          <a className="not-found__link" href="#" aria-label="Brand">
            Dashboard
          </a>
        </nav>
      </header>

      <section className="not-found__content">
        <h1 className="">404</h1>

        <p className="">Oops, something went wrong.</p>
        <p className="">Sorry, we couldn&apos;t find your page.</p>

        <div className="content-controllers">
          <a
            className="content-controllers__item"
            href="https://github.com/alibagheri2079/"
            target="_blank"
            rel="noreferrer"
          >
            <SVG
              name="path"
              className="w-4 h-4"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
            />
            Get the source code
          </a>
          <a
            onClick={() => history.back()}
            className="content-controllers__item"
          >
            <SVG
              name="path"
              className="w-2.5 h-2.5"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              d="M11.2792 1.64001L5.63273 7.28646C5.43747 7.48172 5.43747 7.79831 5.63273 7.99357L11.2792 13.64"
              stroke="currentColor"
              strokeWidth={2}
            />
            Back to examples
          </a>
        </div>
      </section>

      <footer className="">
        <div className="">
          <p className="not-found__footer-paragraph">
            © All Rights Reserved. 2022.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default NotFound;
