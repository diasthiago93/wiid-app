import React from "react";
import * as S from "./style";
import HeaderMenu from "../../components/HeaderMenu";
import Search from "../../components/Search";
import ListButtons from "../../components/ListButtons";

const Main = () => {
  return (
    <S.Wrapper>
      <HeaderMenu />
      <div className="content">
        <Search />
        <ListButtons />
      </div>
    </S.Wrapper>
  );
};

export default Main;
