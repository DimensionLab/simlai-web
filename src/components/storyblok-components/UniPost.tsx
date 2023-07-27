import { render } from 'storyblok-rich-text-react-renderer';
import styled from 'styled-components';
import 'prismjs/themes/prism-twilight.css';
import Prism from 'prismjs';
import { useEffect, useState } from "react";

const ArticleWrapper = styled.article``;

interface VideoType {
    url: string,
    title: string,
}

const UniPost = ( { blok }: any) => {
    const [videoData, setVideoData] = useState<VideoType>()

    useEffect(() => {
      Prism.highlightAll();
    }, [blok.content]);

    useEffect(() => {
        const getVideoData = async () => {
            const response = await fetch(`https://www.youtube.com/oembed?url=${blok.video_link.url}`)
            const data = await response.json();
    
            const srcRegex = /src="([^"]+)"/;
            const matches = data.html.match(srcRegex);
            
            let srcValue = "";
            if (matches && matches.length >= 2) {
                srcValue = matches[1];
            } else {
                console.log("No 'src' attribute found or the URL is invalid.");
            }
    
            const info = {
                url: srcValue,
                title: data.title
            }
    
            setVideoData(info);
        }

        getVideoData();
    }, []);

  return (
    <ArticleWrapper>
        <div className='w-full flex items-center justify-center pb-24 pt-12 lg:pt-24'>
            <div className='article-content flex flex-col gap-y-8 items-center w-[80%]'>
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl max-w-5xl flex self-center">
                    {blok.title}
                </h1>
                {/* <div className='img-container w-full max-w-4xl lg:py-10'>
                    <BorderAroundMainImage>
                        {blok.thumbnail && blok.thumbnail.filename && <img src={blok.thumbnail.filename} alt={blok.thumbnail.alt || ''} className='rounded-xl' />}
                    </BorderAroundMainImage>
                </div> */}
                <ImageWrapper className='max-w-4xl'>
                    <iframe className="aspect-video w-full" src={videoData?.url} title={videoData?.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </ImageWrapper>
                <div className='article-text text-md w-full max-w-4xl flex flex-col gap-y-10 items-center'>
                    <RichTextArticleContent>
                        {render(blok.description_content)}
                    </RichTextArticleContent>
                </div>
            </div>
        </div>
    </ArticleWrapper>
  );
};

export default UniPost;

const BorderAroundMainImage = styled.div`
  width: 100%;
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
  justify-content: center;
  gap: 1rem;

  img {
    border-radius: 10px;
    background: linear-gradient(180deg, #C063F9 0%, #8B7CFF 100%);
    padding: 0.3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;

    @media (min-width: 768px){
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
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

  p {
    color: white;

    img {
      width: 100%;
    }
  }
`;

const ImageWrapper = styled.div`
  background: linear-gradient(180deg, #C063F9 0%, #8B7CFF 100%);
  border-radius: 0.8rem;
  padding: 0.4rem;
  width: 100%;
  
  @media (min-width: 1024px) {
    padding: 1.3rem;
  }

  iframe {
    border: 5px solid rgba(59, 17, 81, 0.40);
    border-radius: 0.8rem;

    @media(min-width: 1024px) {
      border: 10px solid rgba(59, 17, 81, 0.40);
    }
  }
`