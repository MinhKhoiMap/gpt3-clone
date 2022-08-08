import React from "react";
import styled from "styled-components";
import { Button } from "../../components";

import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <S_Footer className="section__padding">
      <div className="header">
        <h1 className="gradient__text">
          Do you want to step in to the future before others
        </h1>
        <Button
          text="Request Early Access"
          color="#fff"
          bgColor="transparent"
        />
      </div>
      <div className="info">
        <div className="links-logo">
          <img src={logo} alt="logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="links-container">
          <div className="links-list">
            <h4>Links</h4>
            <ul>
              <li>Overons</li>
              <li>Social Media</li>
              <li>Counters</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="links-list">
            <h4>Company</h4>
            <ul>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="links-list">
            <h4>Get in touch</h4>
            <ul>
              <li>Crechterwoord K12 182 DK Alknjkcb</li>
              <li>085-132567</li>
              <li>info@payme.net</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rights">&copy; 2021 GPT-3. All rights reserved.</div>
    </S_Footer>
  );
};

export default Footer;

const S_Footer = styled.footer`
  background-color: var(--color-footer);
  .header {
    margin-top: 110px;
    margin-bottom: 185px;
    text-align: center;

    h1 {
      margin-bottom: 4rem;
      font-weight: 800;
      font-size: 3.875rem;
      line-height: 75px;
      letter-spacing: -0.04em;
    }

    button {
      padding: 1rem;
      border: 1px solid #fff;
      font-size: 1.125rem;
      line-height: 21px;
    }
  }
  .info {
    color: #fff;
    display: flex;
    justify-content: space-around;

    .links-logo {
      img {
        width: 120px;
        margin-bottom: 20px;
      }
      p {
        font-size: 0.75rem;
        line-height: 14px;
      }
    }

    .links-container {
      margin-left: 10rem;
      flex: 0.7;
      display: flex;
      justify-content: space-between;

      .links-list {
        h4 {
          font-size: 14px;
          line-height: 16px;
        }

        ul {
          margin-top: 45px;
        }

        li {
          margin: 2rem 0;
          font-size: 12px;
          line-height: 14px;
          cursor: pointer;
        }
      }
    }
  }

  .rights {
    margin-top: 5.313rem;
    text-align: center;
    color: #fff;
    font-size: 12px;
    line-height: 14px;
  }
`;
