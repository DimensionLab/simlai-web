import Link from "next/link";
import { render } from 'storyblok-rich-text-react-renderer';
import styled from "styled-components";

const ArticleTeaserWrapper = styled.div`
  .blog-teaser-container {
    display: flex;
    flex-direction: column;
    // border: 3px solid white;
    border: 3px solid transparent;
    background-color: #0D101B;
    // padding: 1rem;
    padding: 0;
    border-radius: 10px;
    width: 100%;
    transition: 0.6s;

    &:hover{
      // transform: scale(1.03);
      border: 3px solid white;
    }
    
    a {
      display: flex;
      flex-direction: column;
      text-decoration: none;
      color: white;
      text-align: center;
      padding-bottom: 1rem;
      .image-container {
        display: flex;
        img {
          width: 100%;
          max-height: 480px;
          border-radius: 10px;
        }
      }
      h1 {
        font-size: 2rem;
      }
      .text-content-container {
        font-size: 1rem;
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const ArticleTeaser = ({ Article }) => {
  return (
    <ArticleTeaserWrapper>
      <div className="blog-teaser-container">
        <Link href={`/blog/${Article.slug}`}>
          <a className="content-in-link-container">
            <div className="image-container">
              <img src={Article.image.filename} alt="blog"/>
            </div>
            <h1>{Article.title}</h1>
            <div className="text-content-container">
              {render(Article.teaser)}
            </div>
          </a>
        </Link>
      </div>
    </ArticleTeaserWrapper>
  );
};

export default ArticleTeaser;