import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserData } from "../store/userSlice";

const Header = () => {
  const user = useSelector((state) => state.userDetail);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };
  useEffect(() => {
    const auth = getAuth();
    const  unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid, photoURL } = user;
        dispatch(setUserData({ email, displayName, uid, photoURL }));
        navigate('/home')
      } else {
        console.log("sign out and clear redux user state");
        dispatch(setUserData({}));
        navigate('/')
      }
    });
    return ()=>{
      unsubscribed();
    }
  }, []);
  return (
    <div>
      {!user?.uid && (
        <div className="relative md:px-4 md:py-2">
          <img
            className="w-28 mx-auto md:mx-0 sm:w-36 md:w-44 lg:w-52 xl:w-60 2xl:w-72 md:static"
            src="/logo.png"
            alt="logo"
          />
        </div>
      )}
      <div className="bg-black">
        <div className="md:px-4 md:py-2">
          <div className="flex justify-between items-center p-2">
            <div className="flex items-center space-x-3">
              <Link to="/home">
                <img className="w-17 h-12" src="/logo.png" alt="Netflix Logo" />
              </Link>
              <div className="md:hidden">
                <button
                  onClick={toggleDropdown}
                  className="text-white cursor-pointer"
                >
                  Menu
                </button>
              </div>
              <div className="hidden md:flex space-x-3">
                <Link to="/home" className="text-white">
                  Home
                </Link>
                <Link to="/tv-shows" className="text-white">
                  TV Shows
                </Link>
                <Link to="/movies" className="text-white">
                  Movies
                </Link>
                <Link to="/new-popular" className="text-white">
                  New & Popular
                </Link>
                <Link to="/my-list" className="text-white">
                  My List
                </Link>
                <Link to="/browse-language" className="text-white">
                  Browse By Language
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                className="searchBar bg-transparent text-white border-b border-white"
                placeholder="Search"
              />
              <Link to="/children" className="text-white pr-4 md:pr-14">
                Children
              </Link>
              <div className="relative group">
                <button
                  onClick={toggleDropdown}
                  className="text-white cursor-pointer text-center"
                >
                  <b>
                    {user.displayName
                      ? user.displayName.toUpperCase()
                      : "UNKNOWN"}{" "}
                  </b>
                </button>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 bg-black w-36 text-white text-center rounded-lg shadow-lg"
                    onClick={closeDropdown}
                  >
                    <Link
                      to="/account"
                      className="block py-2 hover:bg-gray-700"
                    >
                      Account
                    </Link>
                    <Link to="/help" className="block py-2 hover:bg-gray-700">
                      Help Center
                    </Link>
                    <Link
                      to="/signOut"
                      className="block py-2 hover:bg-gray-700"
                    >
                      Sign Out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
