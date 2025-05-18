import { useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Blogs from "./Components/Blogs/Blogs";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import { GiSelfLove } from "react-icons/gi";
import Text from "./Components/text/Text";
import { toast } from "react-toastify";

function App() {
  const [marks, setMarks] = useState([]);
  const handleMarksButton = (blog) => {
    const nweMarks = [...marks, blog];
    setMarks(nweMarks);
    toast.success("item added to Favorite ");
  };
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <div className="max-w-11/12 mx-auto mt-10">
        <h2 className="text-3xl font-semibold">Active Auctions</h2>
        <p className="text-xl">Discover and bid on extraordinary items</p>
      </div>
      <div className="main-containar max-w-11/12 mx-auto flex space-x-5 text-center mt-10">
        <div className="left-containar w-[70%]">
          <Blogs handleMarksButton={handleMarksButton} marks={marks}></Blogs>
        </div>
        <div className="right-containar w-[30%]">
          <div className="shadow p-4 rounded-md">
            <div className="flex space-x-2 justify-center items-center">
              <GiSelfLove size={25} />
              <h1 className="text-2xl">Favorite Items</h1>
            </div>
            <p className="border mt-7"></p>
            {marks.length == 0 ? (
              <div>
                <h1 className="text-2xl font-semibold mt-6">
                  No favorites yet
                </h1>
                <p className="mt-5">
                  Click the heart icon on any item to add <br /> it to your
                  favorites
                </p>
              </div>
            ) : (
              <div>
                {marks.map((mark) => (
                  <Text key={mark.id} mark={mark}></Text>
                ))}
              </div>
            )}
            <p className="border mt-7"></p>
            <div className="flex justify-between mt-10">
              <h3>Total Bids Amount:</h3>
              <h2 className="text-xl font-medium">$0000</h2>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
