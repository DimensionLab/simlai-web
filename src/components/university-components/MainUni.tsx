import styled from "styled-components";

const MainUni = () => {
    return (
        <main className="flex flex-col justify-center items-left h-full w-full px-4 py-8 md:py-24 gap-y-4 max-w-4xl">
            <h1 className="font-bold text-3xl md:text-5xl">Welcome to Siml.ai University!</h1>
            <h2 className="font-light md:text-2xl md:pb-12">A place where you can learn everything about <strong className="font-bold">Siml.ai</strong> and find out how to utilize it for achieving incredible things!</h2>

            <ImageWrapper>
                <iframe className="aspect-video w-full" src="https://www.youtube.com/embed/i-wpzS9ZsCs" title="NVIDIA Keynote at COMPUTEX 2023" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </ImageWrapper>
        </main>
    )
}

export default MainUni;

const ImageWrapper = styled.div`
  background: linear-gradient(180deg, #C063F9 0%, #8B7CFF 100%);
  border-radius: 0.8rem;
  padding: 0.4rem;
  
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