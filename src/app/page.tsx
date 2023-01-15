import { FC } from 'react';

const Home: FC = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <h1 className="text-5xl">Gyanendro Kh</h1>
        <p className="text-base">Every Stack Software Developer 👨🏼‍🔧</p>
        <p className="text-sm">passionate about technology</p>
        <a
          className="underline text-blue-500 hover:text-blue-700"
          href="http://github.com/GyanendroKh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Home;
