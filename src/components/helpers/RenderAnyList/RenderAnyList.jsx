import React, { useState } from "react";

import GeneratorRandomString from "../../utils/GeneratorRandomString";

const listOld = [1, 2, 3, 4, 5].map((el) => ({
  el,
  id: GeneratorRandomString(),
}));
const RenderAnyList = (Component) => {
  Component.map(map((el) => ({ el, id: GeneratorRandomString() })));

  const hendel = (e) => {
    setList(
      list.filter((el) => {
        if (e !== el.id) return el;
      })
    );
  };
  const hendelBtn = () => {
    setList(list.concat({ el: 10, id: GeneratorRandomString() }));
  };

  return <Component />;
};

export default RenderAnyList;
