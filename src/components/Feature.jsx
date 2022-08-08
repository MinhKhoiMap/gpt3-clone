import React from "react";
import styled from "styled-components";

const Feature = ({ title, text }) => {
  return (
    <S_Feature className="gpt3__feature">
      <div className="title">
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className="text">
        <p>{text}</p>
      </div>
    </S_Feature>
  );
};

export default Feature;

const S_Feature = styled.div`
  display: flex;
  justify-content: space-between;

  .title {
    flex: 1;
    max-width: 180px;
    margin-right: 2rem;
    h1 {
      color: #fff;
      font-size: 1.5rem;
      font-weight: 800;
      line-height: 30px;
      letter-spacing: -0.04em;
    }
    div {
      width: 38px;
      height: 3px;
      background: linear-gradient(103.22deg, #ae67fa -13.86%, #f49867 99.55%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      margin-bottom: 0.25rem;
    }
  }

  .text {
    max-width: 730px;
    flex: 2;
    p {
      font-size: 1rem;
      font-weight: 500;
      line-height: 24px;
      color: #81afdd;
    }
  }
`;
