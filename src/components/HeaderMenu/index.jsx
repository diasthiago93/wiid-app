import React from "react";
import ListMenu from "../ListMenu";
import NewButton from "../NewButton";
import * as S from "./style";

const HeaderMenu = () => {
  return (
    <S.Bar>
      <S.Header>
        <div className="avatar"></div>
        <nav>
          <NewButton />
        </nav>
      </S.Header>
      <ListMenu />
    </S.Bar>
  );
};

export default HeaderMenu;
