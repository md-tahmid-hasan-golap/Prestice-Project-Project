import React from "react";
import { GiSelfLove } from "react-icons/gi";

const Blog = ({ blog, handleMarksButton, marks }) => {
  const { image, currentBidPrice, TimeLeft, title } = blog;
  return (
    <>
      <tr>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img src={image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
            </div>
          </div>
        </td>
        <td>${currentBidPrice}</td>
        <td>{TimeLeft}</td>
        <th>
          <button
            disabled={marks}
            onClick={() => handleMarksButton(blog)}
            className="btn btn-ghost btn-xs"
          >
            <GiSelfLove className={marks ? "text-red-500" : ""} size={25} />
          </button>
        </th>
      </tr>
    </>
  );
};

export default Blog;
