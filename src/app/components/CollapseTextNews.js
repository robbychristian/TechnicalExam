import React, { useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const CollapseTextNews = ({ title, text, width }) => {
  const [collapse, setCollapse] = useState(false);
  return (
    <>
      {width < 768 ? (
        <div className="border-black px-3" style={{ borderBottomWidth: 1 }}>
          <div
            className="border-black flex justify-between cursor-pointer items-center"
            onClick={() => setCollapse(!collapse)}
          >
            <div className="text-lg font-bold py-2">{title}</div>
            <KeyboardArrowDownIcon />
          </div>
          {collapse ? (
            <div
              className={`text-sm mb-3 transition-all duration-500 ease-out`}
            >
              {text}
            </div>
          ) : null}
        </div>
      ) : (
        <>
          <div className="flex" style={{ marginTop: 10 }}>
            <ChatIcon style={{ marginTop: 5, marginRight: 10 }} />
            <div className="text-lg font-bold">{title}</div>
          </div>
          <div className="flex">
            <ChatIcon
              style={{ marginTop: 5, marginRight: 10, visibility: "hidden" }}
            />
            <div className="text-sm">{text}</div>
          </div>
          <div
            style={{ borderBottomWidth: 1, marginTop: 10, paddingBottom: 10 }}
          ></div>
        </>
      )}
    </>
  );
};

export default CollapseTextNews;
