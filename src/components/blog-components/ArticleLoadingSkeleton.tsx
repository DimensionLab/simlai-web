import styled from "styled-components";

const ArticleLoadingSkeletonWrapper = styled.div`

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
    <ArticleLoadingSkeletonWrapper className="w-full py-2">
      <div className="w-full px-4">
          <a className="w-full flex flex-col items-center h-full">
            <div className="flex w-full">
              <div className="w-full aspect-video object-cover rounded-t-xl skeleton"></div>
            </div>
            <div className="h-1/2 flex flex-col w-full px-6 py-12 gap-y-6 bg-[#222530] rounded-b-xl ">
              <h1 className="flex self-start w-full text-xl"></h1>
              <div className="flex w-full justify-between items-center">
                <span className="text-sm text-[#7C7F8B] skeleton rounded w-44 h-6"></span>
                <div className="skeleton w-12 h-6 rounded"></div>
              </div>
            </div>
          </a>
      </div>
    </ArticleLoadingSkeletonWrapper>
  );
}

export default ArticleLoadingSkeleton;