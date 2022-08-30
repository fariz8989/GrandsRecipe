import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "../PostButton/PostButton";
import { getStatus } from "../../redux/action/action";
import { connect } from "react-redux";
//const data = require("../../data.json").result
function Home(props) {
  const [data, setData] = useState([]);
  function rating(data) {
    const rating = [];
    for (let index = data; index > 0; index--) {
      if (index === 0.5) {
        rating.push(
          <svg
            className="w-4 h-4 fill-yellow-300"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7zM288 376.4L288.1 376.3L399.7 435.9L378.4 309.6L469.2 219.8L343.8 201.4L288.1 86.85L288 87.14V376.4z" />
          </svg>
        );
      } else {
        rating.push(
          <svg
            className="w-4 h-4 fill-yellow-300"
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
  useEffect(() => {
    const status = props.data.status;
    if (status === false) {
      const token = sessionStorage.getItem("token");
      axios
        .get("https://grandsbackend.herokuapp.com/users/login", {
          headers: { authorization: token },
        })
        .then((res) => {
          props.setStatus({
            username: res.data?.username,
            status: res.data?.isLoggedIn,
          });
        });
    } else {
      console.log(status);
    }
  }, []);
  useEffect(() => {
    axios
      .get("https://grandsbackend.herokuapp.com/post")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <div className="font-body background-pic h-screen text-center flex items-center justify-center bg-gray-100 relative">
          <div className="w-full h-screen bg-gray-200 absolute opacity-25 left-0 top-0"></div>
          <div className="">
            <div className="items-center justify-center flex test p-12">
              <div className="relative">
                <p className="text-gray-200 text-md sm:text-xl md:text-2xl font-semibold">
                  Welcome to Grand's Recipes
                </p>
                <h1 className="text-4xl md:text-7xl font-semibold text-gray-50">
                  Best Recipies <br />
                  Like Grandma Made
                </h1>
              </div>
            </div>
          </div>
        </div>
        {/*First Section End Here*/}
        <div className="px-12 py-4 bg-neutral-200">
          <h3 className="text-xl font-bold text-gray-800">
            Popular Categories
          </h3>
          <div className="flex justify-start gap-4 md:gap-6 overflow-x-visible relative whitespace-nowrap overflow-y-hidden">
            <div className="categories">
              <svg
                className="w-2/5 h-2/5 fill-gray-600 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M465 134.2c21.46-38.38 19.87-87.17-5.65-123.1c-7.541-10.83-22.31-13.53-33.2-5.938c-10.77 7.578-13.44 22.55-5.896 33.41c14.41 20.76 15.13 47.69 4.098 69.77C407.1 100.1 388 95.1 368 95.1c-36.23 0-68.93 13.83-94.24 35.92L352 165.5V256h90.56l33.53 78.23C498.2 308.9 512 276.2 512 239.1C512 198 493.7 160.6 465 134.2zM320 288V186.6l-52.95-22.69C216.2 241.3 188.5 400 56 400C25.13 400 0 425.1 0 456S25.13 512 56 512c180.3 0 320.1-88.27 389.3-168.5L421.5 288H320z" />
              </svg>
              <span className="text-gray-400 font-semibold text-md">Spicy</span>
            </div>
            <div className="categories">
              <svg
                className="w-2/5 h-2/5 fill-gray-600 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" />
              </svg>
              <span className="text-gray-400 font-semibold text-md">Local</span>
            </div>
            <div className="categories">
              <svg
                className="w-2/5 h-2/5 fill-gray-600 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M96.06 288.3H351.9L252.6 493.8C250.1 499.2 246 503.8 240.1 507.1C235.9 510.3 230 512 224 512C217.1 512 212.1 510.3 207 507.1C201.1 503.8 197.9 499.2 195.4 493.8L96.06 288.3zM386.3 164C392.1 166.4 397.4 169.9 401.9 174.4C406.3 178.8 409.9 184.1 412.3 189.9C414.7 195.7 415.1 201.1 416 208.3C416 214.5 414.8 220.8 412.4 226.6C409.1 232.4 406.5 237.7 402 242.2C397.6 246.6 392.3 250.2 386.5 252.6C380.7 255 374.4 256.3 368.1 256.3H79.88C67.16 256.3 54.96 251.2 45.98 242.2C37 233.2 31.97 220.1 32 208.3C32.03 195.5 37.1 183.4 46.12 174.4C55.14 165.4 67.35 160.4 80.07 160.4H81.06C80.4 154.9 80.06 149.4 80.04 143.8C80.04 105.7 95.2 69.11 122.2 42.13C149.2 15.15 185.8 0 223.1 0C262.1 0 298.7 15.15 325.7 42.13C352.7 69.11 367.9 105.7 367.9 143.8C367.9 149.4 367.6 154.9 366.9 160.4H367.9C374.2 160.4 380.5 161.6 386.3 164z" />
              </svg>
              <span className="text-gray-400 font-semibold text-md">
                Dessert
              </span>
            </div>
            <div className="categories">
              <svg
                className="w-2/5 h-2/5 fill-gray-600 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M64 95.1H0c0 123.8 100.3 224 224 224v128C224 465.6 238.4 480 255.1 480S288 465.6 288 448V320C288 196.3 187.7 95.1 64 95.1zM448 32c-84.25 0-157.4 46.5-195.8 115.3c27.75 30.12 48.25 66.88 59 107.5C424 243.1 512 147.9 512 32H448z" />
              </svg>
              <span className="text-gray-400 font-semibold text-md">Vegie</span>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-800">Popular Dishes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 sm:gap-2 gap-y-1.5">
            {/*Dishes Card*/}

            {data[0] ? (
              data?.slice(0, 5).map((data) => {
                return (
                  <>
                    <Link to={"/detail/" + data.id}>
                      <div className="dishes">
                        <img
                          className="h-40 sm:h-42 w-full object-cover "
                          src={data?.image_url ? "" + data?.image_url : ""}
                          alt={data.name}
                        />
                        <div className="mx-4 mt-4 mb-0.5">
                          <span className="font-bold">{data.title}</span>
                          <span className="block text-gray-500 text-sm">
                            Recipe by {data?.author}
                          </span>
                        </div>
                        <div className="flex gap-0.125 mx-4">
                          {data?.rating ? (
                            rating(data?.rating)
                          ) : (
                            <span className="text-gray-400 text-sm">
                              {"No Review"}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </>
                );
              })
            ) : (
              <div className="col-span-5 h-24 flex items-center justify-center">
                <h1 className="text-2xl font-semibold text-gray-400">
                  No Post Yet
                </h1>
              </div>
            )}
          </div>
          {/*Post Button*/}
          {props.data.status ? <Button />:""}
        </div>
        <Footer />
      </div>
    </>
  );
}
const mapStateToProps = (state) => ({
  data: state.userReducer,
});
const mapDispatchToProps = (dispatch) => ({
  setStatus: (value) => {
    return dispatch(getStatus(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
