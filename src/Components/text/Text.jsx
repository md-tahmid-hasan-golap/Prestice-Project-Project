import React from "react";

const Text = ({ mark }) => {
  console.log(mark);
  return (
    <div>
      <div className="flex items-center space-x-2 mt-5">
        <div className="mask mask-squircle w-12 h-12">
          <img src={mark.image} alt="" />
        </div>
        <h3 className="text-xl">{mark.title}</h3>
      </div>
      <div className="flex justify-evenly">
        <p>${mark.currentBidPrice}</p>
        <p>Bids : {mark.bidsCount}</p>
      </div>
    </div>
  );
};

export default Text;
