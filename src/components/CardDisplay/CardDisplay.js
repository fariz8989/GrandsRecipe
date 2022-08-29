import React from "react";
import { Link, useLocation } from "react-router-dom";
import { images } from "./images/images";
function CardDisplay() {
  const location = useLocation();
  const data = location.state?.result;
  const keyword= location.state?.keyword
  function rating(data){
    const rating = []
    for (let index = data; index > 0; index--) {
      if(index === 0.5){
        rating.push(<svg
        className="w-4 h-4 fill-yellow-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7zM288 376.4L288.1 376.3L399.7 435.9L378.4 309.6L469.2 219.8L343.8 201.4L288.1 86.85L288 87.14V376.4z" />
  </svg>)
      }else{
       rating.push(<svg
        className="w-4 h-4 fill-yellow-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
      >
        <path d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z" />
      </svg>)
      }
    }
  
    return rating.map(data=>{
      return(<>
      {data}</>)
    })
  }
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
                      src={data?.image_url ? "" + data?.image_url : ""}
                      alt={data.name}
                    />
                    <div className="m-4">
                      <span className="font-bold">{data.title}</span>
                      <span className="block text-gray-500 text-sm">
                        Recipe by {data.author}
                      </span>
                    </div>
                    <div className="flex gap-0.125 mx-4">
                    {data?.rating ? rating(data?.rating):console.log('No reviews')}
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
