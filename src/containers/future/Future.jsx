import React from "react";
import styled from "styled-components";
import { Feature } from "../../components";

const Future = () => {
  return (
    <S_Future className="section__padding gradient__bg" id="case-studies">
      <div className="left">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today &amp; Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="right">
        <Feature
          title="Improving end distrusts instantly"
          text="From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
        />
        <Feature
          title="Become the tended active"
          text="Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
        />
        <Feature
          title="Message or am nothing"
          text="Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
        />
        <Feature
          title="Really boy law county"
          text="Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
        />
      </div>
    </S_Future>
  );
};

export default Future;

const S_Future = styled.section`
  display: flex;
  justify-content: space-between;

  .left {
    flex: 1;
    margin-right: 8.625rem;

    h1 {
      font-weight: 800;
      font-size: 2.125rem;
      line-height: 45px;
    }

    p {
      margin-top: 2.125rem;
      color: #ff8a71;
      font-weight: 500;
      font-size: 1rem;
      line-height: 30px;
    }
  }

  .right {
    flex: 1.5;
    h1 {
      font-size: 1.125rem;
    }

    .gpt3__feature {
      margin-top: 2rem;
    }

    .text {
      max-width: 390px;

      p {
        font-size: 0.875rem;
      }
    }
  }
`;
