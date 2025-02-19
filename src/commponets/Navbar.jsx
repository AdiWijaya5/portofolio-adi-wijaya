import { useEffect, useState } from 'react';

const navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const headleClick = () => {
    setShow(!show);
    // console.log(show);
  };

  let menuActive = show ? 'right-0' : '-top-full';

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else setScroll(false);
    });
  });

  let scrollActivte = scroll ? 'py-6 bg-white shadow' : 'py-4';

  return (
    <div className={`navbar fixed w-full py-4 ${scrollActivte}`}>
      <div className="container mx-auto px-4">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo">
            <h1 className="sm:text-2xl text-xl font-bold">PORTOFOLIO</h1>
          </div>
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col px-8 py-6 rounded-r-lg shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li className="flex items-center gap-3">
              <i className="ri-home-7-line text-3xl md:hidden block"></i>
              <a
                href="#home"
                className="font-medium opacity-75 uppercase tracking-widest text-black/80 relative group"
              >
                Home
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-information-line text-3xl md:hidden block"></i>
              <a
                href="#about"
                className="font-medium opacity-75 uppercase tracking-widest text-black/80 relative group"
              >
                About Me
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-settings-3-line text-3xl md:hidden block"></i>
              <a
                href="#services"
                className="font-medium opacity-75 uppercase tracking-widest text-black/80 relative group"
              >
                Skill
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="ri-image-line text-3xl md:hidden block"></i>
              <a
                href="#proyek"
                className="font-medium opacity-75 uppercase tracking-widest text-black/80 relative group"
              >
                Projects
                <div className="absolute w-full h-0.5 bg-black/80 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            </li>
          </ul>
          <div className="sosial flex items-center gap-2">
            <a
              href="#social"
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
            >
              Social Media{' '}
            </a>
            <i
              className="ri-menu-3-line text-3xl md:hidden block"
              onClick={headleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
