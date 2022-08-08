import React from "react";
import styled from "styled-components";
import { Feature } from "../../components";

const WhatIsGPT = () => {
  return (
    <S_Feature className="section__margin" id="what-is-GPT">
      <Feature
        title="What is GPT-3"
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
      />
      <div className="heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <a href="#">Explore The Library</a>
      </div>
      <div className="content">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought."
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </S_Feature>
  );
};

export default WhatIsGPT;

const S_Feature = styled.div`
  padding: 2rem;

  background: radial-gradient(
    circle at 30% -100%,
    #042c54 25%,
    rgba(4, 44, 84, 1) 85%,
    rgba(27, 120, 222, 1) 100%
  );

  .heading {
    margin-top: 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      max-width: 510px;
      font-weight: 800;
      font-size: 2.125rem;
      line-height: 45px;
    }
    a {
      color: #ff8a71;
      font-weight: 500;
      font-size: 1rem;
      line-height: 30px;
    }
  }

  .content {
    margin: 6.125rem -1rem 0;
    display: flex;


    .gpt3__feature {
      margin: 0 1rem;
      flex-direction: column;

      .text {
        margin-top: 3rem;
      }
    }
  }
`;
