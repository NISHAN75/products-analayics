import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container flex justify-between mt-8">
      <div className="home-info w-5/12">
        <div className="home-content">
          <h1 className="text-5xl mb-5">
            wooden chair.
            <br />
            Modern Furniture
          </h1>
          <p className="text-2xl leading-10">
            Furniture should always be comfortable. And always have a piece of
            art that you made somewhere in the home.
          </p>
          <Link to='/blogs'><button className="bg-orange-300 p-3 rounded-md w-1/3 mt-5 hover:bg-orange-500 hover:text-white">Read More</button></Link>
        </div>
      </div>
      <div className="furniture-img w-6/12">
        <img
          className="rounded-lg"
          src="https://wallpaperaccess.com/full/2076086.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Home;
