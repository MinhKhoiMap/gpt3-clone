import React from "react";
import styled from "styled-components";
import { Button } from "../../components";

const CTA = () => {
  return (
    <S_CTA className="section__margin">
      <div className="left">
        <h5>Request Early Access to Get Started</h5>
        <h3>Register today &amp; start exploring the endless possiblities.</h3>
      </div>
      <div className="right">
        <Button text="Get Started" color="#fff" radius={[40]} bgColor="#000" />
      </div>
    </S_CTA>
  );
};

export default CTA;

const S_CTA = styled.section`
  padding: 3rem;
  border: 1px solid #000000;
  border-radius: 11px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    h5 {
      color: #0e0e0e;
      font-weight: 800;
      font-size: 0.75rem;
      line-height: 45px;
    }

    h3 {
      color: #000;
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 45px;
    }
  }

  .right {
    button {
      padding: 12px 45px;
      font-weight: 700;
      font-size: 1.125rem;
      line-height: 30px;
    }
  }
`;
