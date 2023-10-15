import React from "react";
import TextNews from "../components/TextNews";
import SideNews from "../components/SideNews";

const SecondSection = ({ news, height, width }) => {
  return (
    <div id="secondSection" className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
        <div className="col-span-1 md:col-span-7">
          <div className="text-2xl font-bold" style={{ marginBottom: 10 }}>
            News
          </div>
          <div
            className="font-bold"
            style={{ color: "#626262", marginBottom: 30, fontSize: 16 }}
          >
            Competition is fierce in the online slots industry, with many big
            developers vying for players’ attention. Learn more about the top
            software providers below.
          </div>
          <div
            className="border-black"
            style={{ borderWidth: 1, marginBottom: 20 }}
          ></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* MICROGAMING */}
            <div className="col-span-1 justify-center items-center">
              <img
                src={`https://miro.medium.com/v2/resize:fit:700/1*qotspb4qXN2UEfgC9g2u8A.png`}
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderWidth: 1.5,
                  height: width < 768 ? height * 0.5 : 200,
                  width: width,
                }}
              />
              <div style={{ padding: 15 }}>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  vitae optio provident quisquam. Natus laudantium, praesentium
                  dolore odit delectus voluptas repellat. Quod iusto, sunt magni
                  impedit quae corrupti accusamus mollitia?
                </div>
                <div
                  className="cursor-pointer flex justify-center items-center mt-5"
                  style={{
                    backgroundColor: "#CA2020",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <div className="text-sm font-bold text-white">Read More</div>
                </div>
              </div>
            </div>
            {/* NET ENT */}
            <div className="col-span-1 justify-center items-center">
              <img
                src={`https://www.netent.com/en/wp-content/uploads/sites/2/2018/05/netent-logo-green.png`}
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderWidth: 1.5,
                  height: width < 768 ? height * 0.5 : 200,
                  width: width,
                }}
              />
              <div style={{ padding: 15 }}>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  vitae optio provident quisquam. Natus laudantium, praesentium
                  dolore odit delectus voluptas repellat. Quod iusto, sunt magni
                  impedit quae corrupti accusamus mollitia?
                </div>
                <div
                  className="cursor-pointer flex justify-center items-center mt-5"
                  style={{
                    backgroundColor: "#CA2020",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <div className="text-sm font-bold text-white">Read More</div>
                </div>
              </div>
            </div>
            {/* PlayTech */}
            <div className="col-span-1 justify-center items-center">
              <img
                src={`https://www.onlinecasinoreports.ph/images/playtech.jpg`}
                style={{
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  borderWidth: 1.5,
                  height: width < 768 ? height * 0.5 : 200,
                  width: width,
                }}
              />
              <div style={{ padding: 15 }}>
                <div className="text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  vitae optio provident quisquam. Natus laudantium, praesentium
                  dolore odit delectus voluptas repellat. Quod iusto, sunt magni
                  impedit quae corrupti accusamus mollitia?
                </div>
                <div
                  className="cursor-pointer flex justify-center items-center mt-5"
                  style={{
                    backgroundColor: "#CA2020",
                    padding: 15,
                    borderRadius: 10,
                  }}
                >
                  <div className="text-sm font-bold text-white">Read More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3">
          <div className="text-xl font-bold">News</div>
          <div
            className="border-black my-4"
            style={{ borderWidth: 1, marginBottom: 20 }}
          ></div>
          {/* {news.map((item, index) => {

          })} */}
          {news.slice(0, 8).map((item, index) => {
            return (
              <SideNews
                key={index}
                image={item.thumbnail.formats.thumbnail.url}
                title={item.title}
                date={item.createdAt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
