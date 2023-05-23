import styled from "styled-components";

const ArticleLoadingSkeletonWrapper = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  max-width: 800px;
  width: 100%;

  .blog-teaser-container{
    width: 70%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    row-gap: 1rem;
    background-color: #0D101B;
    padding: 1rem;

    .image-container {
      width: 100%;
      min-height: 40vh;
      background-color: red;
      border-radius: 10px;
    }

    .title {
      width: 100%;
      min-height: 2rem;
      border-radius: 10px;
    }

    .text-content-container {
      width: 100%;
      min-height: 1.5rem;
      border-radius: 10px;
    }
  }

  .skeleton {
    animation: skeleton-loading 1s linear infinite alternate
  }

  @keyframes skeleton-loading {
    0% {
      background-color: hsla(203, 20%, 50%, 1);
    }
    100% {
      background-color: hsla(203, 20%, 80%, 1);
    }
  }
`;

const ArticleLoadingSkeleton = () => {
  return (
    <ArticleLoadingSkeletonWrapper>
      <div className="blog-teaser-container">
        <div className="image-container skeleton"></div>
        <div className="title skeleton"></div>
        <div className="text-content-container skeleton"></div>
      </div>
    </ArticleLoadingSkeletonWrapper>
  );
}

export default ArticleLoadingSkeleton;