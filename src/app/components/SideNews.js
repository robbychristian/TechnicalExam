import React from "react";
import moment from "moment";

const SideNews = ({ image, date, title }) => {
  return (
    <div
      className="grid grid-cols-6 gap-4 "
      style={{ borderBottomWidth: 1, marginTop: 10, paddingBottom: 10 }}
    >
      <div className="col-span-2 flex items-center">
        <img src={image} style={{ borderRadius: 5 }} />
      </div>
      <div className="col-span-4">
        <div className="text-sm" style={{ color: "#777777" }}>
          {moment(date).format("LL")}
        </div>
        <div className="text-md underline font-bold">{title}</div>
        <div className="text-sm" style={{ color: "#777777" }}>
          Game Provider
        </div>
      </div>
    </div>
  );
};

export default SideNews;
