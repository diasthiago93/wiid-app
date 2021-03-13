import React from "react";
import * as S from "./style";
import { CaretDown } from "@styled-icons/boxicons-regular/CaretDown";

const NewButton = () => {
  return (
    <S.Button>
      New <CaretDown size={32} />
    </S.Button>
  );
};

export default NewButton;
