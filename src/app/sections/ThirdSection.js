import React from "react";
import TextNews from "../components/TextNews";
import CollapseTextNews from "../components/CollapseTextNews";

const ThirdSection = ({ width, height, news }) => {
  return (
    <div id="thirdSection" className="py-4">
      <div className="text-2xl font-bold" style={{ marginBottom: 10 }}>
        News
      </div>
      <div className="border-black" style={{ borderWidth: 1 }}></div>
      <div className="py-6">
        {width > 768
          ? news.length > 0 &&
            news.slice(0, 7).map((item, index) => {
              return (
                <CollapseTextNews
                  key={index}
                  title={item.title}
                  text={item.summary}
                />
              );
            })
          : news.length > 0 &&
            news.slice(0, 8).map((item, index) => {
              return (
                <CollapseTextNews
                  key={index}
                  title={item.title}
                  text={item.summary}
                  width={width}
                />
              );
            })}
      </div>
    </div>
  );
};

export default ThirdSection;
