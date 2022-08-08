import React from "react";
import styled from "styled-components";
import Blog from "../../components/Blog";

import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.png";

const Blogs = () => {
  const blogsData = [
    {
      id: 1,
      urlImg: blog1,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      id: 2,
      urlImg: blog2,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      id: 3,
      urlImg: blog3,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      id: 4,
      urlImg: blog4,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      id: 5,
      urlImg: blog5,
      date: "Sep 26, 2021",
      title: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
  ];

  return (
    <S_Blogs className="section__padding" id="lib">
      <div className="header">
        <h1 className="gradient__text">
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>
      <div className="container">
        <div className="left">
          <Blog
            urlImg={blogsData[0].urlImg}
            date={blogsData[0].date}
            title={blogsData[0].title}
          />
        </div>
        <div className="right">
          {blogsData.map((blog) => {
            if (blog.id !== 1)
              return (
                <Blog
                  key={blog.id}
                  urlImg={blog.urlImg}
                  date={blog.date}
                  title={blog.title}
                />
              );
          })}
        </div>
      </div>
    </S_Blogs>
  );
};

export default Blogs;

const S_Blogs = styled.section`
  .header {
    margin-bottom: 7.25rem;
    h1 {
      font-weight: 800;
      font-size: 3.875rem;
      letter-spacing: -0.04em;
    }
  }
  .container {
    display: flex;
    justify-content: space-between;

    .left {
      margin-right: 2rem;
      flex: 0.75;
    }

    .right {
      flex: 1;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 2rem;
    }
  }
`;
