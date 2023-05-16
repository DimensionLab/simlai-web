import { render } from 'storyblok-rich-text-react-renderer';
import styled from 'styled-components';

const ArticleWrapper = styled.article`
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