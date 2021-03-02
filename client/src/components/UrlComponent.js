import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";

export default function UrlComponent() {
  const [url, setUrl] = useState(null);
  const [shortUrl, setShortUrl] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isShorten, setIsShorten] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const result = await axios.post("http://localhost:5000/shorten", {
      longUrl: url,
    });
    setShortUrl(result.data.shortUrl);
    setIsShorten(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white min-w-screen justify-center items-center space-y-6">
      <h1 className="text-blue-800 text-4xl font-extrabold">
        URL TOO LONG? SHORTEN HERE!
      </h1>
      <form
        className="flex flex-row  h-1/3 w-1/3 justify-center items-center space-x-5"
        onSubmit={onSubmit}
      >
        <input
          className="pl-4 outline-none w-full h-12 rounded-lg border-2 border-gray-300 focus:border-blue-300 hover:border-blue-300 "
          type="text"
          placeholder="Shorten your link here!"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
        />
        <button
          className="focus:outline-none h-12 w-22 border-1 rounded-lg py-1 px-6 bg-blue-800 hover:bg-blue-400 text-white"
          type="submit"
        >
          SHORTEN
        </button>
      </form>

      {isShorten ? (
        <div className="flex flex-row h-12 w-1/6 md:w-1/3 items-center rounded-lg border-2 border-gray-300	">
          <a
            className="pl-4 sm:w-2 md:w-5/6  text-blue-700 "
            href={shortUrl}
            target={shortUrl}
          >
            {shortUrl}
          </a>
          <CopyToClipboard
            text={shortUrl}
            onCopy={() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1000);
            }}
          >
            <button className="focus:outline-none w-20 border-1 rounded-lg  bg-white hover:bg-blue-300 text-blue-500">
              {copied ? (
                <h1 className=" text-blue-500 ">Copied!</h1>
              ) : (
                <h1 className="text-blue-500">Copy</h1>
              )}
            </button>
          </CopyToClipboard>
        </div>
      ) : (
        <> </>
      )}
    </div>
  );
}
