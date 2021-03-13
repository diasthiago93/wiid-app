import React from "react";
import * as S from "./style";
import { FilterAlt } from "@styled-icons/boxicons-regular/";

const ListButtons = () => {
  return (
    <S.List>
      <input type="checkbox" />
      <button>Atribuir</button>
      <button>Arquivar</button>
      <button>Agendar</button>
      <FilterAlt size={32} />
    </S.List>
  );
};

export default ListButtons;
