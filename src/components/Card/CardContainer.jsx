import * as React from "react";
import useGetToken from "../../hooks/useGetToken";
import useGetDataOwner from "../../hooks/useGetDataOwner";
import Card from "./Card";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { setIdModal } from "../../store/PostReduser";

function CardClassComponentContainer(props) {
  useGetToken();
  const [token, setToken] = useState("");
  const dataUser = useGetDataOwner(token);
  let location = useLocation();
  const IsAuthPage = () => {
    if (location.pathname === "/auth") {
      const searchParams = new URLSearchParams(location.hash);

      localStorage.setItem(
        "token",
        String(searchParams.getAll("#access_token"))
      );
    }
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, [token]);

  return (
    <>
      <Card
        token={token}
        data={dataUser}
        IsAuthPage={IsAuthPage}
        posts={props.bestPost}
        setIdModal={props.setIdModal}
        modalData={props.modalId}
      />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    bestPost: state.PostPage.bestPost,
    modalId: state.PostPage.modalId,
  };
};

export default compose(connect(mapStateToProps, { setIdModal }))(
  CardClassComponentContainer
);
