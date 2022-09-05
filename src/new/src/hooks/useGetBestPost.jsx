import { useEffect, useState } from "react";
import axios from "axios";

const useGetBestPost = (
  token,
  setAllPost,
  setIsFetching,
  setErrorLoading,
  nextAfter,
  setPostAfter,
  resetLoaading,
  divLoader,
  count,
  setCount
) => {
  useEffect(() => {
    if (!token) return;
    const load = async () => {
      setErrorLoading("");
      setIsFetching(true);

      try {
        const resp = await axios.get(`https://oauth.reddit.com/best`, {
          headers: { Authorization: `bearer ${token}` },
          params: {
            limit: 10,
            after: nextAfter,
          },
        });
        const list = await resp.data.data.children;
        setAllPost((prevState) => prevState.concat(...list));

        const afters = await resp.data.data.after;

        setPostAfter(afters);
      } catch (error) {
        setErrorLoading(String(error));
      }
      setIsFetching(false);
    };
    if (count < 3) {
      console.log(count);
      setCount((prevState) => prevState + 1);
      const obser = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            load();
          }
        },
        {
          rootMargin: "600px",
        }
      );

      if (divLoader.current) {
        obser.observe(divLoader.current);
      }
      return () => {
        if (divLoader.current) {
          obser.unobserve(divLoader.current);
        }
      };
    }
  }, [token, nextAfter, divLoader.current, resetLoaading]);
};

export default useGetBestPost;
