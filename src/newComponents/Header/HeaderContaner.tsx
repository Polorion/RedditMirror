import * as React from "react";
import { connect } from "react-redux";
import { Header } from "./Header";
import {AppStateType} from "../../store/Store";

interface IHeaderContaner {
  currentUrl:string
  clientId:string
  userIsActive: { [key:string]:string }
  userIsLoading:boolean
}

function HeaderContaner(props:IHeaderContaner) {
  return (
    <Header
      currentUrl={props.currentUrl}
      clientId={props.clientId}
      userIsActive={props.userIsActive}
      userIsLoading={props.userIsLoading}
    />
  );
}
const mapStateToProps = (state:AppStateType) => {
  return {
    currentUrl: state.MainPage.CURRENT_URL,
    clientId: state.MainPage.CLIENT_ID,
    userIsActive: state.MainPage.userIsActive,
    userIsLoading: state.MainPage.userIsLoading,
  };
};

export default connect(mapStateToProps, {})(HeaderContaner);
