import React from "react";

function header() {
  return (
    <header className="fixed top-0 w-full h-16 z-50 ">
      <div className="w-full h-full mx-auto px-5 max-w-screen-lg">
        <div className="relative h-full w-full">
          <a
            href="http://localhost:3000/"
            className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-1 font-semibold"
          >
            xwang
          </a>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <nav className="hidden md:flex items-center justify-center text-sm gap-5">
            <div className="h-8 rounded-full px-3 flex items-center justify-center transition-colors duration-300 ease-in-out bg-black dark:bg-white text-white dark:text-black">
              home
            </div>
            <div>blog</div>
            <div>projects</div>
            <div>other</div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default header;
