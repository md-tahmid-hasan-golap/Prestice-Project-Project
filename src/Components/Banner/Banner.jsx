import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(https://i.ibb.co/XkspkC4V/Banner-min.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">
              Bid on Unique Items from <br /> Around the World
            </h1>
            <p className="mb-5 text-gray-400">
              Discover rare collectibles, luxury goods, and vintage <br />{" "}
              treasures in our curated auctions
            </p>
            <button className="btn rounded-2xl">Explore Auctions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
