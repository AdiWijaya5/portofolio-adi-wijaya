import { useEffect, useState } from "react";

const navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const headleClick = () => {
    setShow(!show);
    // console.log(show);
  };

  let menuActive = show ? "left-0" : "-left-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else setScroll(false);
    });
  });

  let scrollActivte = scroll ? "py-6 bg-white shadow" : "py-4";

  return (
    <div className={`navbar fixed w-full py-4 z-10 ${scrollActivte}`}>
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between navbar-box">
          <div className="logo">
            <h1 className="text-xl font-bold sm:text-2xl">PORTOFOLIO</h1>
          </div>
          <h1>test</h1>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed z-10 ${menuActive}  top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded-r-lg shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="block text-3xl ri-home-7-line md:hidden"></i>
              <a
                href="#home"
                className="relative font-medium tracking-widest uppercase opacity-75 text-black/80 group"
              >
                Home
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="block text-3xl ri-information-line md:hidden"></i>
              <a
                href="#about"
                className="relative font-medium tracking-widest uppercase opacity-75 text-black/80 group"
              >
                About Me
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="block text-3xl ri-settings-3-line md:hidden"></i>
              <a
                href="#services"
                className="relative font-medium tracking-widest uppercase opacity-75 text-black/80 group"
              >
                Skill
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="block text-3xl ri-image-line md:hidden"></i>
              <a
                href="#proyek"
                className="relative font-medium tracking-widest uppercase opacity-75 text-black/80 group"
              >
                Projects
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2 sosial">
            <a
              href="#social"
              className="px-5 py-2 font-bold text-white transition-all rounded-full bg-sky-400 hover:bg-sky-500"
            >
              Social Media{" "}
            </a>
            <i
              className="block text-3xl ri-menu-3-line md:hidden"
              onClick={headleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
