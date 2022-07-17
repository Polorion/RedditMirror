import React, { useEffect, useState } from "react";
import ModalCard from "./ModalCard";
import { useLocation } from "react-router-dom";

const ModalCardContainer = (props) => {
  let location = useLocation();

  const postData = props.posts.filter((id) => {
    return id.data.id === location.pathname.split("/")[2].split("id")[1];
  });

  return <ModalCard posts={postData[0]} />;
};

export default ModalCardContainer;
