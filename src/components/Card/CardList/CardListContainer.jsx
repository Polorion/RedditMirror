import { CardList } from "./CardList";
import React from "react";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { qThunk, setBestPost, setPostThunk } from "../../../store/PostReduser";
import { tokenThunk } from "../../../store/MainReducer";

const CaralistContainer = (props) => {
  const [allPost, setAllPost] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [errorLoading, setErrorLoading] = useState("");

  const [nextAfter, setPostAfter] = useState("");

  const [count, setCount] = useState(0);
  const [resetLoaading, setResetLoaading] = useState(0);

  const divLoader = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!props.token) return;
    const load = async () => {
      setErrorLoading("");
      setIsFetching(true);

      try {
        const resp = await axios.get(`https://oauth.reddit.com/best`, {
          headers: { Authorization: `bearer ${props.token}` },
          params: {
            limit: 10,
            after: nextAfter,
          },
        });
        const list = await resp.data.data.children;
        setAllPost((prevState) => prevState.concat(...list));

        const afters = await resp.data.data.after;

        setPostAfter(afters);
        dispatch(setPostThunk(list));
      } catch (error) {
        setErrorLoading(String(error));
      }
      setIsFetching(false);
    };
    if (count < 4) {
      setCount((prevState) => prevState + 1);
      const obser = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            load();
          }
        },
        {
          rootMargin: "200px",
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
  }, [props.token, nextAfter, divLoader.current, resetLoaading]);

  return (
    <>
      <Outlet />
      <CardList
        allPost={allPost}
        isFetching={isFetching}
        errorLoading={errorLoading}
        setResetLoaading={setResetLoaading}
        divLoader={divLoader}
        count={count}
        setCount={setCount}
        setIdModal={props.setIdModal}
      />
    </>
  );
};

export default CaralistContainer;
