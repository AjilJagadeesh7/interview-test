import "./photos.css";

import { Image, Pagination, Spin } from "antd";
import { useEffect, useState } from "react";

import useFetch from "react-fetch-hook";

export const Photos = () => {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(1);
  const { isLoading, data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/photos"
  );
  useEffect(() => {
    if (data) {
      setImages(data.slice(current * 9 - 9, current * 9));
    }
  }, [data, current]);
  const handleChange = (page) => {
    setCurrent(page);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-screen">
        <Spin />;
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-r from-slate-700 via-sky-900 to-blue-900 py-5 h-screen overflow-y-scroll">
      <div className=" m-auto my-2 xl:m-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 justify-items-center w-11/12 mb-10">
        {images?.map((image, key) => (
          <div
            key={key}
            className="bg-white rounded-md drop-shadow-2xl shadow-black shadow-md flex flex-col p-1 gap-2 justify-center items-center"
          >
            <Image
              src={image?.url}
              width={300}
              preview={false}
              className="hover:scale-110 transition-transform ease-in-out duration-500 rounded-lg cursor-pointer"
            />
            <div className="">{image?.title.slice(0, 20)}</div>
          </div>
        ))}
      </div>
      <Pagination
        className="paginate"
        pageSize={9}
        showSizeChanger={false}
        total={Math.ceil(data?.length)}
        current={current}
        onChange={handleChange}
      />
    </div>
  );
};
