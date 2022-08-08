import React from "react";
import styled from "styled-components";

import logo from "../../../src/assets/logo.png";
import { Button } from "../../components";

const Nav = () => {
  return (
    <S_Nav className="section__padding">
      <div className="left">
        <img src={logo} alt="logo" />
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#what-is-GPT">What is GPT?</a>
          </li>
          <li>
            <a href="#open-AI">Open AI</a>
          </li>
          <li>
            <a href="#case-studies">Case Studies</a>
          </li>
          <li>
            <a href="#lib">Library</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <a href="#" className="sign-in">
          Sign In
        </a>
        <Button color="#fff" text="Sign Up" bgColor="#FF4820" radius={[5]} />
      </div>
    </S_Nav>
  );
};

export default Nav;

const S_Nav = styled.nav`
  padding-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left {
    flex: 1;
    display: inherit;
    align-items: center;

    img {
      width: 62.56px;
      height: 16.02px;
    }

    ul {
      margin-left: 68.78px;
      display: flex;
      justify-content: space-between;

      li {
        color: #fff;
        line-height: 25px;

        a {
          font-size: 1.125rem;
          font-weight: 500;
          padding: 20px;
          display: inline-block;
        }
      }
    }
  }

  .right {
    .sign-in {
      color: #fff;
      margin-right: 26px;
    }
  }
`;
