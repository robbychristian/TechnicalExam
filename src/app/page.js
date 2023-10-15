"use client";
import Image from "next/image";
import HeaderNavigation from "./navigation/HeaderNavigation";
import MainCard from "./components/MainCard";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { api } from "../../config/api";
import { useMediaQuery } from "react-responsive";
import HeadSection from "./sections/HeadSection";
import TextNews from "./components/TextNews";
import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import LoadingModal from "./components/LoadingModal";

const useWindowSize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, window.innerHeight]);
    };
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return size;
};

export default function Home() {
  const [width, height] = useWindowSize();
  const [news, setNews] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    (async () => {
      api
        .get("uat-articles?populate[0]=thumbnail&pagination[pageSize]=12")
        .then((response) => {
          setNews(response.data.data);
          setTotalItems(response.data.meta.pagination.total);
          setLoading(false);
        });
    })();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingModal />
      ) : (
        <>
          <HeaderNavigation width={width} height={height} />
          <div className="px-10 py-5 lg:px-32">
            <HeadSection width={width} height={height} news={news} />
            <FirstSection width={width} height={height} />
            <SecondSection width={width} height={height} news={news} />
            <ThirdSection width={width} height={height} news={news} />
          </div>
        </>
      )}
    </div>
  );
}
