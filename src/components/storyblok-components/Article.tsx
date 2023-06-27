import { render } from 'storyblok-rich-text-react-renderer';
import styled from 'styled-components';
import 'prismjs/themes/prism-twilight.css';
import Prism from 'prismjs';
import { useEffect } from "react";
import { ArticleStoryblok } from '../../../component-types-sb';

const ArticleWrapper = styled.article``;

const Article = ( { blok }: ArticleStoryblok ) => {
    useEffect(() => {
      Prism.highlightAll();
  }, [blok.content]);
  
  return (
    <ArticleWrapper>
      <div className='w-full flex items-center justify-center pb-24'>
        <div className='article-content flex flex-col gap-y-24 items-center w-[80%]'>
          <h1 className="font-bold text-3xl lg:text-5xl max-w-3xl flex self-start">
            {blok.title}
          </h1>
          <div className='flex w-1/4 self-start -mt-10 gap-x-10'>
            <div className='w-full flex flex-col'>
              <span className='text-sm text-[#454853]'>Date:</span>
              <span className='text-sm text-[#7C7F8B]'>{blok.date}</span>
            </div>
            <div className='w-full flex flex-col'>
              <span className='text-sm text-[#454853]'>Category:</span>
              <span className='text-sm text-[#7C7F8B]'>Model Engineer</span>
            </div>
          </div>
          {/* <h2>{blok.subtitle}</h2> */}
          <div className='img-container'>
            <BorderAroundMainImage>
              {blok.image && blok.image.filename && <img src={blok.image.filename} alt={blok.image.alt || ''} className='rounded-xl' />}
            </BorderAroundMainImage>
          </div>
          <div className='article-text text-md w-full max-w-4xl flex flex-col gap-y-10 items-center'>
            <RichTextArticleContent>
              {render(blok.content)}
            </RichTextArticleContent>
          </div>
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default Article;

const BorderAroundMainImage = styled.div`
  img {
    border: 5px solid rgba(59, 17, 81, 0.40);
    object-fit: contain;
    width: 100%;
  }
  padding: 0.3rem;
  border-radius: 16px;
  background: linear-gradient(180deg, #C063F9 0%, #8B7CFF 100%);

  @media (min-width: 1024px) {
    padding: 1.3rem;
  }
`

const RichTextArticleContent = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-items: center;
  gap: 3rem;

  img {
    border-radius: 10px;
    background: linear-gradient(180deg, #C063F9 0%, #8B7CFF 100%);
    padding: 0.3rem;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    padding-bottom: 5px;
    border-bottom: 2px solid transparent;
    transition: 0.6s;

    &:hover {
      border-bottom: 2px solid #6B50FF;
    }
  }
  
  pre, code {
    width: 100%;
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
`;