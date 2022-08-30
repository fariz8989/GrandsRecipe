import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image } from "./images/images";

function Detail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState();

  function getRating(rate) {
    const rating = [];
    for (let index = rate; index > 0; index--) {
      if (index === 0.5) {
        rating.push(
          <svg
            className="w-8 h-8 fill-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7zM288 376.4L288.1 376.3L399.7 435.9L378.4 309.6L469.2 219.8L343.8 201.4L288.1 86.85L288 87.14V376.4z" />
          </svg>
        );
      } else {
        rating.push(
          <svg
            className="w-8 h-8 fill-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
          </svg>
        );
      }
    }

    return rating.map((data) => {
      return <>{data}</>;
    });
  }

  function getData() {
    axios.get("http://localhost:4000/post").then((res) => {
      const array = res.data.data;
      const filtered = array.filter((data) => {
        return data.id === parseInt(id);
      });
      setRecipe(filtered);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
    
      <div className="min-h-screen px-8 pb-4 bg-gray-200">
       
         {recipe?.map((recipe) => {
          return (
            <>
              <div className="flex gap-4 py-8 border-b-2 border-gray-400">
                <div className="w-60 h-60 ">
                  <img
                    className="rounded-lg w-full h-full"
                    src={recipe?.image_url ? "" + recipe?.image_url : ""}
                    alt={recipe?.name}
                  />
                </div>
                <div className="w-3/5">
                  <h1 className="text-4xl text-gray-700 font-bold">
                    {recipe?.title}
                  </h1>
                  <span className="block text-gray-400 text-sm">
                    Recipe by {recipe?.author}
                  </span>
                  <div className="mt-4 flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-6 fill-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z" />
                    </svg>
                    <span className="font-semibold">
                      {recipe?.time + " Minute(s)"}
                    </span>
                  </div>
                  <div className="mt-4 flex items-center gap-4 text-gray-700">
                    <svg
                      className="w-6 fill-gray-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M64 128C64.53 128 65.07 128 65.6 128C73 91.49 105.3 64 144 64C158.1 64 172.1 68.1 184.9 75.25C198.2 49.55 225.1 32 256 32C286.9 32 313.8 49.56 327.1 75.25C339 68.1 353 64 368 64C406.7 64 438.1 91.49 446.4 128C446.9 128 447.5 128 448 128C483.3 128 512 156.7 512 192C512 203.7 508.9 214.6 503.4 224H8.563C3.118 214.6 .0013 203.7 .0013 192C.0013 156.7 28.66 128 64 128H64zM.001 283.4C.001 268.3 12.28 256 27.43 256H484.6C499.7 256 512 268.3 512 283.4C512 353.9 467.6 414.1 405.3 437.5L403.5 451.1C401.5 467.1 387.9 480 371.8 480H140.2C124.1 480 110.5 467.1 108.5 451.1L106.7 437.5C44.36 414.1 0 353.9 0 283.4H.001z" />
                    </svg>
                    <span className="font-semibold">
                      {recipe?.portion + " People(s)"}
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap flex-col bg-gray-100 rounded-md w-60 h-60 p-4 items-center">
                  <h1 className="font-bold text-2xl text-gray-500 ">RATING</h1>
                  <div className="flex gap-0.125 my-6">
                    {recipe?.rating ? getRating(recipe?.rating) : ""}
                  </div>
                  <h1 className="font-bold text-4xl">
                    {recipe?.rating ? recipe?.rating + "/5" : "No Reviews"}
                  </h1>
                  <span className="text-gray-400 mt-6">
                    {recipe?.rating ? "12,965 Reviews" : "No Reviews"}
                  </span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-4">
                <div>
                  <h1 className="font-bold text-gray-500 text-2xl uppercase">
                    Ingredients
                  </h1>

                  {recipe?.ingredients?.map((data) => {
                    return (
                      <h1 className="font-semibold text-gray-800 text-md">
                        {"- " + data}
                      </h1>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
      
    </>
  );
}
export default Detail;
