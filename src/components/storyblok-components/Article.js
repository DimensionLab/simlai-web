import { render } from 'storyblok-rich-text-react-renderer';
import styled from 'styled-components';

const ArticleWrapper = styled.article`
  padding-top: 2rem;
  padding-bottom: 5rem;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem 2rem 1rem;

    .img-container {
      display: flex;
      justify-content: center;
      img{
        width: 100%;
        border-radius: 10px;
        max-width: 800px;
      }
    }
    .article-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      h1{
        font-size: 2.5rem;
      }
      h2{
        font-size: 1rem;
        color: gray;
      }
      .article-text {
        width: 100%;
        text-align: left;
        max-width: 800px;

        img {
          width: 100%;
          max-width: 800px;
          max-height: 480px;
        }
      }
    }
  }
`;

const Article = ( { blok } ) => {
  return (
    <ArticleWrapper>
      <div className='container'>
        <div className='article-content'>
          <h1>{blok.title}</h1>
          <h2>{blok.subtitle}</h2>
          <div className='article-text'>
            {render(blok.content)}
          </div>
          <div className='img-container'>
            <img src={blok.image.filename} alt={blok.image.alt}/>
          </div>
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default Article;