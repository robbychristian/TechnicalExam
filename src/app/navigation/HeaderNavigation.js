import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const HeaderNavigation = ({ width, height }) => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="px-10 lg:px-32 font-bold py-4 flex justify-between items-center">
      <div className="text-3xl">LOGO</div>
      {width > 768 ? (
        <div className="flex items-center">
          <a href="#" className="text-xl mr-6">
            HOME
          </a>
          <SearchIcon style={{ fontSize: 24 }} />
        </div>
      ) : (
        <div onClick={() => setShowMenu(!showMenu)}>
          <MenuIcon />
          {showMenu ? (
            <div className="bg-white h-full absolute top-0 left-0 right-0 bottom-0">
              <div className="flex w-full justify-end px-10 py-4">
                <div onClick={() => setShowMenu(!showMenu)}>
                  <MenuIcon />
                </div>
              </div>
              <a
                href="#home"
                className="flex justify-center items-center"
                style={{
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  paddingTop: 8,
                  paddingBottom: 8,
                }}
              >
                Home
              </a>
              <a
                href="#"
                className="flex justify-center items-center"
                style={{
                  borderBottomWidth: 1,
                  borderTopWidth: 1,
                  paddingTop: 8,
                  paddingBottom: 8,
                }}
              >
                Search
              </a>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default HeaderNavigation;
