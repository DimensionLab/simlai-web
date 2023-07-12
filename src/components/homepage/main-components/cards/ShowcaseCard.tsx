import styled from "styled-components";

interface ShowcaseCardProps {
    imgPath: string,
    title: string,
    subtitle: string,
    txtData: string[][],
}

const ShowcaseCard = (props: ShowcaseCardProps) => {
    return (
        <section className="w-full flex items-center justify-center pb-16">
            <main className="w-full flex flex-col px-4 py-16 items-center">
                <ImageWrapper className="max-w-5xl">
                    <img src={props.imgPath} alt={props.title} id={`${props.imgPath.includes("simulation") ? `simulation-studio` : `model-engineer`}`}/>
                </ImageWrapper>
                <section className="flex flex-col pt-20 max-w-5xl">
                    <h1 className="text-4xl font-black pb-12 lg:text-7xl">{props.title}</h1>
                    <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-x-6">
                        <h2 className="text-3xl font-normal lg:text-4xl lg:w-[50%] md:font-light">{props.subtitle}</h2>
                        <div className="flex flex-col gap-y-6 lg:w-[50%]">
                            {props.txtData.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <h3 className="font-bold text-xl">{data[0]}</h3>
                                        <span className="text-[16px]" dangerouslySetInnerHTML={ {__html: data[1]} }></span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </section>
    )
}

export default ShowcaseCard;

const ImageWrapper = styled.div`
  background: linear-gradient(180deg, #C063F9 0%, #8B7CFF 100%);
  border-radius: 0.8rem;
  padding: 0.4rem;
  
  @media (min-width: 1024px) {
    padding: 1.3rem;
  }

  img {
    border: 5px solid rgba(59, 17, 81, 0.40);
    border-radius: 0.8rem;

    @media(min-width: 1024px) {
      border: 10px solid rgba(59, 17, 81, 0.40);
    }
  }
`