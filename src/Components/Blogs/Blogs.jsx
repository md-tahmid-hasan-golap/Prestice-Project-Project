import React, { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleMarksButton, marks }) => {
  const [blogs, setBlogs] = useState([]);
  useState(() => {
    fetch("./Blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  //   console.log(blogs);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-black font-semibold text-sm">
              <th>Items</th>
              <th>Current Bid</th>
              <th>Time Left</th>
              <th>Bid Now</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {blogs.map((blog) => (
              <Blog
                key={blog.id}
                handleMarksButton={handleMarksButton}
                marks={marks.find((item) => item.id == blog.id)}
                blog={blog}
              ></Blog>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Blogs;
