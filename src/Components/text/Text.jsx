import React from "react";
import { RxCrossCircled } from "react-icons/rx";
const Text = ({ mark, hanhleErrorButton }) => {
  // console.log(mark);
  return (
    <div className="flex items-center space-x-2">
      <div>
        <div className="flex items-center pt-3 space-x-2 mt-5">
          <img
            className="mask mask-squircle h-12 w-12"
            src={mark.image}
            alt=""
          />

          <h3 className="text-xl">{mark.title}</h3>
        </div>
        <div className="flex justify-evenly">
          <p>${mark.currentBidPrice}</p>
          <p>Bids : {mark.bidsCount}</p>
        </div>
      </div>
      <div>
        <button onClick={() => hanhleErrorButton(mark)}>
          <RxCrossCircled size={25} />
        </button>
      </div>
    </div>
  );
};

export default Text;
