import React from "react";
import ChatIcon from "@mui/icons-material/Chat";

const TextNews = ({ title, text }) => {
  return (
    <div id="textNewsSection">
      <div className="grid grid-cols-12 gap-2">
        <div className="md:col-span-2 xl:col-span-1">
          <ChatIcon />
        </div>
        <div className="col-span-10 xl:col-span-11">
          <div className="text-sm font-bold underline">{title}</div>
          <div className="text-sm my-2">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default TextNews;
