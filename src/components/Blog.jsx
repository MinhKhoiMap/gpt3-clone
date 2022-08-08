import React from "react";
import styled from "styled-components";

const Blog = ({ urlImg, date, title }) => {
  return (
    <S_Blog className="blog">
      <div className="heading">
        <img src={urlImg} />
      </div>
      <div className="body">
        <div className="text">
          <p className="date">{date}</p>
          <h4 className="title">{title}</h4>
        </div>
        <div className="footer">Read Full Article</div>
      </div>
    </S_Blog>
  );
};

export default Blog;

const S_Blog = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: var(--color-footer);

  .heading {
    width: 100%;
    height: 100%;
    background: var(--color-bg);
    img {
      width: 100%;
      height: 100%;
    }
  }

  .body {
    height: 100%;
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-weight: 700;
      font-size: 0.728rem;
      line-height: 35px;
    }

    h4 {
      font-weight: 800;
      font-size: 1.569rem;
      line-height: 30px;
      margin-bottom: 5rem;
      cursor: pointer;
    }

    .footer {
      font-weight: 700;
      font-size: 0.728rem;
      line-height: 35px;
      display: flex;
      align-items: flex-end;
      cursor: pointer;
    }
  }
`;
