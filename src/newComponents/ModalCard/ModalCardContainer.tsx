import React from "react";
import ModalCard from "./ModalCard";
import { connect } from "react-redux";
import { AppStateType } from "../../store/Store";

interface IModalCardContainer {
  bestPost: [
    {
      data: {
        id: string;
        title: string;
        author: string;
        url_overridden_by_dest: string;
        name: string;
        ups: number;
      };
    }
  ];
  modalId: string;
}

const ModalCardContainer = (props: IModalCardContainer) => {
  console.log(props.bestPost);
  const post = props.bestPost.filter((id) => id.data.id === props.modalId);

  return <ModalCard post={post[0] && post[0].data} />;
};

const mapStateToProps = (state: AppStateType) => {
  return {
    modalId: state.PostPage.modalId,
    bestPost: state.PostPage.bestPost,
  };
};

export default connect(mapStateToProps, {})(ModalCardContainer);
