import { Link, useLocation } from "react-router-dom";
import Logo from "./assets/Nickfolio_icon_colored.png";
import { navigation } from "./Constants";

function App() {
  const pathname = useLocation();
  return (
    <>
      <div className=" relative w-screen h-screen overflow-x-hidden">
        <header
          className="fixed z-50 left-0 top-0 w-full flex px-5 max-lg:py-4 justify-between items-center border-b border-n-6 lg:bg-n-8/90 
        lg:backdrop-blur-sm
        lg:px-7.5
        "
        >
          <a className=" flex gap-[0.5rem] items-center" href="#hero">
            <div className=" w-8 h-auto">
              <img
                className=" w-full object-cover"
                src={Logo}
                alt="NickFolio"
              />
            </div>
            <h1 className=" text-xl font-black">NickFolio</h1>
          </a>
          <div className=" flex items-center justify-between m-auto">
            {/* <p className=" cursor-pointer font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 lg:text-n-1/50">About</p>
            <p className=" cursor-pointer font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 lg:text-n-1/50">Projects</p>
            <p className=" cursor-pointer font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 lg:text-n-1/50">Skills</p>
            <p className=" cursor-pointer font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 lg:text-n-1/50">Testimonials</p>
            <p className=" cursor-pointer font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 lg:text-n-1/50">Contact</p> */}
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                className={`cursor-pointer font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 
              ${item.onlyMobile ? 'lg:hidden':''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 xl:px-12 ${
                item.url === pathname.hash
                  ? 'z-2 lg:text-n-1'
                  : 'lg:text-n-1/50'
              } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
          <div className="flex gap-4">
            <Link
              className=" bg-violet-950 text-sm opacity-80 rounded px-2 py-1"
              to="/Signup"
            >
              Sign up
            </Link>
            <Link
              className="bg-violet-950 text-sm opacity-80 rounded px-2 py-1"
              to="/login"
            >
              Login
            </Link>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
