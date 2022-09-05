import * as React from "react";
import wolf from "../../assets/img/notFound.png";
import Style from "./page404.module.css";

const Page404 = () => {
  return (
    <div className={Style.body}>
      <div className={Style.imgBody}>
        <img src={wolf} alt="" />
      </div>
      <p>Страницы нету!</p>
    </div>
  );
};

export default Page404;
