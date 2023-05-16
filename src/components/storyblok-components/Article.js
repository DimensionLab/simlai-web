import { render } from 'storyblok-rich-text-react-renderer';
import styled from 'styled-components';

const ArticleWrapper = styled.article`
  padding-top: 5rem;
  padding-bottom: 5rem;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 2rem 1rem;

    .img-container {
      img{
        width: 100%;
      }
    }
    .article-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1{
        font-size: 1.5rem;
      }
      h2{
        font-size: 1rem;
        color: gray;
      }
      .article-text {
        width: 90%;
        text-align: left;
        max-width: 800px;
      }
    }
  }
`;

const Article = ( { blok } ) => {
  return (
    <ArticleWrapper>
      <div className='container'>
        <div className='img-container'>
          <img src={blok.image.filename} alt={blok.image.alt}/>
        </div>
        <div className='article-content'>
          <h1>{blok.title}</h1>
          <h2>{blok.subtitle}</h2>
          <div className='article-text'>
            {render(blok.content)}
          </div>
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default Article;