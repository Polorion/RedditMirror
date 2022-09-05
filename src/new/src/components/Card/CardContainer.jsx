import * as React from "react";

import Card from "./Card";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

import useGetDataOwner from "../../hooks/useGetDataOwner";
import {setIdModal} from "../../store/PostReduser";
import {setModalIsOpenOrClosed} from "../../store/MainReducer";


function CardClassComponentContainer(props) {
  if (props.modalIsOpen === true) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }



  const [token, setToken] = useState("");
  const dataUser = useGetDataOwner(token);
  let location = useLocation();
  // const IsAuthPage = () => {
  //   if (location.pathname === "/auth") {
  //     const searchParams = new URLSearchParams(location.hash);
  //     localStorage.setItem(
  //       "token",
  //       String(searchParams.getAll("#access_token"))
  //     );
  //   }
  // };

  useEffect(() => {
    setToken(localStorage.getItem('tokens'));
  }, [token]);

  return (
    <>
      <Card
          userdatas={...props}
        token={token}
        data={dataUser}
        // IsAuthPage={IsAuthPage}
        posts={props.bestPost}
        setIdModal={props.setIdModal}
        modalData={props.modalId}
        setModalIsOpenOrClosed={props.setModalIsOpenOrClosed}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    bestPost: state.PostPage.bestPost,
    modalIsOpen: state.MainPage.modalIsOpen,
    modalId: state.PostPage.modalId,
    CURRENT_URL:state.MainPage.CURRENT_URL ,
    CLIENT_ID:state.MainPage.CLIENT_ID,
    SECRET:state.MainPage.SECRET
  };
};

export default compose(
  connect(mapStateToProps, { setIdModal, setModalIsOpenOrClosed })
)(CardClassComponentContainer);
