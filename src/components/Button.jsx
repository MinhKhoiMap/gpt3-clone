import React from "react";
import styled from "styled-components";

const Button = ({ text, color, radius = [0], bgColor, handleClick }) => {
  if (radius.length < 2) radius = radius[0] + "px";
  else radius = radius.map((item) => item + "px").join(" ");

  return (
    <S_Button
      color={color}
      borderRadius={radius}
      bgColor={bgColor}
      onClick={handleClick}
    >
      {text}
    </S_Button>
  );
};

export default Button;

const S_Button = styled.button`
  padding: 8px 16px;
  color: ${(props) => props.color};
  font-size: 1.125rem;
  font-weight: 500;
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};
  border: none;
  outline: none;
  cursor: pointer;
`;
