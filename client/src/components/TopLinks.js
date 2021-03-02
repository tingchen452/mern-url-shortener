import React, { useState, useEffect } from "react";
import axios from "axios";

export default function TopLinks() {
  const [links, setLinks] = useState([]);
  const getTopLinks = async () => {
    try {
      await axios.get("http://localhost:5000/").then((res) => {
        const data = res.data;
        setLinks(data);
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getTopLinks();
    // console.log(links);
  }, []);

  return (
    <div className="h-screen flex flex-col items-center py-16 ">
      <h1 className="font-bold py-2 text-blue-800">Top Links</h1>
      <table className="table-auto  w-3/5 ">
        <tbody>
          <tr className=" bg-blue-800 ">
            <th className="w-4 text-white border-blue-800 border-2">#</th>
            <th className="w-1/2 text-white border-blue-800 border-2 ">
              Original URL
            </th>
            <th className="w-1/3 text-white border-blue-800 border-2">
              Shortened URL
            </th>
            <th className="w-1/3 text-white border-blue-800 border-2">
              Clicks
            </th>
          </tr>
        </tbody>

        {links.map((item, index) => {
          return (
            <tbody className=" bg-white" key={index}>
              <tr className="text-center	">
                <td className="border-b border-gray-300">{index + 1}</td>
                <td className="border-b	border-gray-300 ">
                  <a
                    className="text-blue-500"
                    href={item.longUrl}
                    target={item.longUrl}
                  >
                    {item.longUrl}
                  </a>
                </td>
                <td className="border-b	border-gray-300">
                  <a
                    className="text-blue-500"
                    href={item.shortUrl}
                    target={item.shortUrl}
                  >
                    {item.shortUrl}
                  </a>
                </td>
                <td className="border-b	border-gray-300">{item.clicks}</td>
              </tr>
            </tbody>
          );
        })}
      </table>

      {/* {links.map((item) => {
        return (
          <tbody className=" bg-white">
            <tr className="text-center	">
              <td className="border-b	border-gray-300 ">
                <a
                  className="text-blue-500"
                  href={item.longUrl}
                  target={item.longUrl}
                >
                  {item.longUrl}
                </a>
              </td>
              <td className="border-b	border-gray-300">
                <a
                  className="text-blue-500"
                  href={item.shortUrl}
                  target={item.shortUrl}
                >
                  {item.shortUrl}
                </a>
              </td>
              <td className="border-b	border-gray-300">{item.clicks}</td>
            </tr>
          </tbody>
        );
      })}

      {links.map((item) => {
        return (
          <tbody className=" bg-white">
            <tr className="text-center	">
              <td className="border-b	border-gray-300 ">
                <a
                  className="text-blue-500"
                  href={item.longUrl}
                  target={item.longUrl}
                >
                  {item.longUrl}
                </a>
              </td>
              <td className="border-b	border-gray-300">
                <a
                  className="text-blue-500"
                  href={item.shortUrl}
                  target={item.shortUrl}
                >
                  {item.shortUrl}
                </a>
              </td>
              <td className="border-b	border-gray-300">{item.clicks}</td>
            </tr>
          </tbody>
        );
      })} */}
    </div>
  );
}
