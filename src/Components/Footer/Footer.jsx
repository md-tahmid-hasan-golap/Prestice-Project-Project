import React from "react";

const Footer = () => {
  return (
    <div>
      <div>
        <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10 mt-20">
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-blue-400">Auction</span>{" "}
              <span className="text-yellow-400">Gallery</span>
            </h1>
          </div>
          <nav className="grid grid-flow-col gap-4 font-medium">
            <a className="link link-hover">Bid.</a>
            <a className="link link-hover">Win.</a>
            <a className="link link-hover">Own.</a>
          </nav>
          <nav>
            <div className="grid grid-flow-col gap-4 font-medium text-xs">
              <p>Home</p>
              <p>Auctions</p>
              <p>Categories</p>
              <p>How to works</p>
            </div>
          </nav>
          <aside>
            <p>© 2025 AuctionHub. All rights reserved.</p>
          </aside>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
