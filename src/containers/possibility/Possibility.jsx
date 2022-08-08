import React from "react";
import styled from "styled-components";

import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <S_Possibility className="section__padding" id="open-AI">
      <div className="left">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="right">
        <p className="started">Request Early Access to Get Started</p>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="content">
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <p className="footer">Request Early Access to Get Started</p>
      </div>
    </S_Possibility>
  );
};

export default Possibility;

const S_Possibility = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  .left {
    margin-right: 2rem;
    flex: 1;
  }

  .right {
    flex: 1;
    .started {
      color: #71e5ff;
      font-weight: 500;
      font-size: 1rem;
      line-height: 30px;
    }

    h1 {
      margin-top: 10px;
      font-weight: 800;
      font-size: 2.125rem;
      line-height: 45px;
    }

    .content {
      margin-top: 1.5rem;
      color: #81afdd;
      font-weight: 400;
      font-size: 1rem;
      line-height: 30px;
    }

    .footer {
      margin-top: 1.938rem;
      margin-bottom: 3rem;
      color: #ff8a71;
      font-weight: 500;
      font-size: 1rem;
      line-height: 30px;
    }
  }
`;
