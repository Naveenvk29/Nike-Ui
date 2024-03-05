import logo from "../assets/logo.png";
import { GiShoppingBag } from "react-icons/gi";
// import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-600 flex justify-between items-center pl-16 sm:pl-6 sm:pr-12 md:pl-12 md:pr-16  p-4 pr-36 shadow-2xl  w-full h-[10vh] fixed z-50 ">
        <div className=" ">
          <Link to="/">
            <img src={logo} alt="" className=" cursor-pointer h-auto w-20" />
          </Link>
        </div>
        <div className="relative flex gap-4 ">
          {/* <BsSearch size={24} /> */}
          <Link to="/wishlist">
            <AiOutlineHeart size={25} />
          </Link>
          <Link to="/cart">
            <GiShoppingBag size={25} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
