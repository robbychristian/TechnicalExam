import React from "react";

const MainCard = ({ image, height, width, category, title, mb, cardType }) => {
  return (
    <div className={mb}>
      <div
        className="rounded border-2 flex flex-col bg-no-repeat bg-cover bg-bottom"
        style={{
          borderRadius: 15,
          backgroundImage: `url(${image})`,
          height:
            cardType === "head"
              ? height + 75
              : width < 768 // if breakpoint is lower than sm
              ? height + 50 // if breakpoint is lower than sm
              : height,
          minWidth: cardType === "head" ? width : width - 75,
        }}
      >
        <div
          className="flex-wrap flex justify-center px-5"
          style={{
            borderTopRightRadius: 10,
            borderBottomLeftRadius: 10,
            marginTop: "auto",
            width: "fit-content",
            backgroundColor: "#CA2020",
          }}
        >
          <div className="text-white">{category}</div>
        </div>
      </div>
      <div className="text-black mt-2 ml-1 font-bold">{title}</div>
    </div>
  );
};

export default MainCard;
