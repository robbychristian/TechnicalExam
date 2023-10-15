import React, { useEffect, useState } from "react";
import MainCard from "../components/MainCard";
import TextNews from "../components/TextNews";
import { api } from "../../../config/api";
import { CircularProgress } from "@mui/material";

const FirstSection = ({ width, height }) => {
  const [loading, setLoading] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [totalItems, setTotalItems] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    setLoading(true);
    api
      .get("uat-articles?populate[0]=thumbnail&pagination[pageSize]=12")
      .then((response) => {
        setNews(response.data.data);
        setTotalItems(response.data.meta.pagination.total);
        setLoading(false);
      });
  }, []);

  const handleLoadMore = async () => {
    setLoadMore(true);
    api
      .get("uat-articles?populate[0]=thumbnail&pagination[pageSize]=24")
      .then((response) => {
        setLoadMore(false);
        setNews(response.data.data);
      });
  };

  return (
    <div id="firstSection" className="py-4">
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
        <div className="col-span-1 md:col-span-7 ">
          <div className="text-2xl font-bold">News</div>
          <div className="border-black" style={{ borderWidth: 1 }}></div>
          {loading ? (
            <div className="flex justify-center items-center mt-5">
              <CircularProgress style={{ color: "#CA2020" }} />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-4">
                {width < 768
                  ? news.length > 0 &&
                    news.slice(0, 3).map((item, index) => {
                      return (
                        <MainCard
                          key={index}
                          image={item.thumbnail.formats.medium.url}
                          height={item.thumbnail.formats.thumbnail.height}
                          width={item.thumbnail.formats.thumbnail.width}
                          category={item.id == 3 ? `Crypto Currency` : `Games`}
                          title={item.title}
                          mb={`mb-5`}
                          cardType={"news"}
                        />
                      );
                    })
                  : news.length > 0 &&
                    news.map((item, index) => {
                      return (
                        <MainCard
                          key={index}
                          image={item.thumbnail.formats.medium.url}
                          height={item.thumbnail.formats.thumbnail.height}
                          width={item.thumbnail.formats.thumbnail.width}
                          category={
                            index == 3 || index > 4
                              ? `Crypto Currency`
                              : `Games`
                          }
                          title={item.title}
                          mb={`mb-5`}
                          cardType={"news"}
                        />
                      );
                    })}
              </div>
              {loadMore ? (
                <div className="flex justify-center items-center mt-5">
                  <CircularProgress style={{ color: "#CA2020" }} />
                </div>
              ) : news.length < 14 ? (
                <div
                  className="flex justify-center items-center cursor-pointer"
                  onClick={handleLoadMore}
                >
                  <div
                    className="text-xl font-bold"
                    style={{ color: "#CA2020" }}
                  >
                    Load more news
                  </div>
                </div>
              ) : null}
            </>
          )}
        </div>
        <div className="col-span-1 md:col-span-3">
          <div className="text-2xl font-bold">News</div>
          <div className="border-black" style={{ borderWidth: 1 }}></div>
          {loading ? (
            <div className="flex justify-center items-center mt-5">
              <CircularProgress style={{ color: "#CA2020" }} />
            </div>
          ) : (
            <div className="py-4">
              {width > 768
                ? news.length > 0 &&
                  news.slice(0, 6).map((item, index) => {
                    return (
                      <TextNews
                        key={index}
                        title={item.title}
                        text={item.summary}
                      />
                    );
                  })
                : news.length > 0 &&
                  news.slice(0, 7).map((item, index) => {
                    return (
                      <TextNews
                        key={index}
                        title={item.title}
                        text={item.summary}
                      />
                    );
                  })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
