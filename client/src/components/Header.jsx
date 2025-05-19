import { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 text-neutral-500 shadow dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ms-2">
          <a className="text-xl text-black dark:text-white" href="#">
            Navbar
          </a>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline focus:outline-none dark:text-neutral-200 lg:hidden"
          aria-label="Toggle navigation"
        >
          <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>

        {/* Collapsible Menu */}
        <div
          className={`${isOpen ? "flex" : "hidden"
            } mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:flex lg:basis-auto`}
        >
          <div className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row">
            <div className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2">
              <a className="text-black dark:text-white lg:px-2" href="#">
                Home
              </a>
            </div>
            <div className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
              <a className="text-black/60 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80 lg:px-2" href="#">
                Features
              </a>
            </div>
            <div className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
              <a className="text-black/60 hover:text-black/80 dark:text-white/60 dark:hover:text-white/80 lg:px-2" href="#">
                Pricing
              </a>
            </div>
            <div className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0">
              <a className="pointer-events-none text-black/30 dark:text-white/30 lg:px-2">
                Disabled
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
