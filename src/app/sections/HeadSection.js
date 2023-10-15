import React, { useEffect, useState } from "react";
import { api } from "../../../config/api";
import MainCard from "../components/MainCard";
import { CircularProgress, Skeleton, Stack } from "@mui/material";

const HeadSection = ({ width, height, news, totalItems }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      api
        .get("uat-articles?populate[0]=thumbnail&pagination[pageSize]=6")
        .then((response) => {
          setLoading(false);
        });
    })();
  }, []);

  return (
    <div id="headSection" className="py-4">
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
          <Stack spacing={1}>
            <Skeleton
              variant="rounded"
              width={width < 768 ? width * 0.8 : 400}
              height={210}
            />
            <Skeleton
              variant="text"
              width={width < 768 ? width * 0.8 : 400}
              sx={{ fontSize: width < 768 ? "0.7rem" : "1rem" }}
            />
          </Stack>
          <Stack spacing={1}>
            <Skeleton
              variant="rounded"
              width={width < 768 ? width * 0.8 : 400}
              height={210}
            />
            <Skeleton
              variant="text"
              width={width < 768 ? width * 0.8 : 400}
              sx={{ fontSize: width < 768 ? "0.7rem" : "1rem" }}
            />
          </Stack>
          <Stack spacing={1}>
            <Skeleton
              variant="rounded"
              width={width < 768 ? width * 0.8 : 400}
              height={210}
            />
            <Skeleton
              variant="text"
              width={width < 768 ? width * 0.8 : 400}
              sx={{ fontSize: width < 768 ? "0.7rem" : "1rem" }}
            />
          </Stack>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
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
                    cardType={"head"}
                  />
                );
              })
            : news.length > 0 &&
              news.slice(0, 6).map((item, index) => {
                return (
                  <MainCard
                    key={index}
                    image={item.thumbnail.formats.medium.url}
                    height={item.thumbnail.formats.thumbnail.height}
                    width={item.thumbnail.formats.thumbnail.width}
                    category={item.id == 3 ? `Crypto Currency` : `Games`}
                    title={item.title}
                    mb={`mb-5`}
                    cardType={"head"}
                  />
                );
              })}
        </div>
      )}
    </div>
  );
};

export default HeadSection;
