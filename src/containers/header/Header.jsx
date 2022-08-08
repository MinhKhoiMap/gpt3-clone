import React from "react";
import styled from "styled-components";

import { Button } from "../../components/";

import ai from "../../assets/ai.png";
import visitor from "../../assets/visitor.png";

const Header = () => {
  return (
    <S_Header className="section__padding" id="home">
      <div className="left">
        <h1 className="gradient__text">
          Let&apos;s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <form>
          <input type="email" placeholder="Your Email Address" />
          <Button
            text="Get Started"
            color="#fff"
            bgColor="#FF4820"
            radius={[0, 6, 6, 0]}
          />
        </form>

        <div className="visitor">
          <img src={visitor} alt="visitor" />
          <p className="visitor__desc">
            1,600 people requested access a visit in last 24 hours
          </p>
        </div>
      </div>
      <div className="right">
        <img src={ai} alt="ai" />
      </div>
    </S_Header>
  );
};

export default Header;

const S_Header = styled.section`
  display: flex;
  align-items: center;

  .left {
    margin-right: 5rem;
    flex: 1;
    h1 {
      font-size: 3.875rem;
      font-weight: 800;
      letter-spacing: -0.04em;
      line-height: 75px;
    }
    p {
      margin-top: 33px;
      font-size: 1.25rem;
      font-weight: 400;
      color: #81afdd;
      line-height: 28px;
    }
    form {
      margin-top: 2rem;
      display: flex;

      input {
        flex: 1;
        width: 100%;
        padding: 0 1rem;
        font-family: "Manrope", sans-serif;
        font-size: 1.25rem;
        color: #fff;
        min-height: 50px;
        background-color: #052d56;
        border: none;
        border-radius: 5px 0px 0px 5px;
        outline: none;

        &::placeholder {
          color: #3d6184;
          font-family: "Manrope", sans-serif;
        }
      }

      button {
        flex: 0.3;
        min-height: 50px;
      }
    }
    .visitor {
      margin-top: 3rem;
      display: flex;
      align-items: center;
      img {
        width: 181.79px;
        height: 38px;
      }

      .visitor__desc {
        margin: 0 14px;
        color: #fff;
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 38px;
      }
    }
  }

  .right {
    flex: 1;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
