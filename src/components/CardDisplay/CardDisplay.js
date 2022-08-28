import React from "react";
import { Link, useLocation } from "react-router-dom";
import { images } from "./images/images";
function CardDisplay() {
  const location = useLocation();
  const data = location.state?.result;
  const keyword= location.state?.keyword
console.log(data)
  return (
    <>
      <main className="font-body px-6 py-6 bg-gray-200 md:col-span-4">
        <header className="mt-10">
          <h2 className="text-gray-700 text-4xl md:text-6xl font-semibold tracking-wider">
            Recipes
          </h2>
          <h3 className="text-lg font-light">For {keyword}</h3>
        </header>
        <div>
          <h4 className="font-bold pb-2 mt-8 border-b-2 border-gray-300">
            Latest
          </h4>
          <div className="mt-6 grid md:grid-cols-5 md:gap-4">
            {data?.map((data) => {
              return (
                <>
                <Link to={"/detail/"+data.id}>
                  <div className="sm:h-80 hover:bg-gray-300 shadow-gray-600 hover:-translate-y-3 transition ease-out duration-500 rounded bg-white border-gray-300 shadow-md overflow-hidden my-2 pb-4">
                    <img
                      className="h-40 sm:h-52 w-full object-cover "
                      src={data?.image_url ? require("" + data?.image_url) : ""}
                      alt={data.name}
                    />
                    <div className="m-4">
                      <span className="font-bold">{data.name}</span>
                      <span className="block text-gray-500 text-sm">
                        Recipe by {data.author}
                      </span>
                    </div>
                    <div className="flex gap-0.125 mx-4">
                {}
              </div>
                  </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
export default CardDisplay;
