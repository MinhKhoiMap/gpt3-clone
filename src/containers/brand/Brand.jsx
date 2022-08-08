import React from "react";
import styled from "styled-components";

import brand from "../../assets/brand.png";

const Brand = () => {
  return (
    <S_Brand>
      <img src={brand} alt="brand" />
    </S_Brand>
  );
};

export default Brand;

const S_Brand = styled.section`
  margin: 1rem;
  display: flex;

  img {
    margin: auto;
  }
`;
