import Link from "next/link";
import { render } from 'storyblok-rich-text-react-renderer';
import styled from "styled-components";

const ArticleTeaserWrapper = styled.div`
  .blog-teaser-container {
    display: flex;
    flex-direction: column;
    .image-container {
      img {
        width: 10rem;
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
`;

const ArticleTeaser = ({ Article }) => {
  return (
    <ArticleTeaserWrapper>
      <div className="blog-teaser-container">
        <Link href={`/blog/${Article.slug}`}>
          <div className="content-in-link-container">
            <div className="image-container">
              <img src={Article.image.filename} alt="blog"/>
            </div>
            <h1>{Article.title}</h1>
            <div className="text-content-container">
              {render(Article.teaser)}
            </div>
          </div>
        </Link>
      </div>
    </ArticleTeaserWrapper>
  );
};

export default ArticleTeaser;