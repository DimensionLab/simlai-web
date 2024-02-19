import styled from "styled-components";

interface ShowcaseCardProps {
    imgPath: string,
    title: string,
    subtitle: string,
    txtData: string[][],
    format: "img" | "video"
}

const ShowcaseCard = (props: ShowcaseCardProps) => {
    return (
        <section className="w-full flex items-center justify-center pb-16" id={`${props.imgPath.includes("simulation") ? `simulation-studio` : `model-engineer`}`}>
            <main className="w-full flex flex-col px-4 py-16 items-center">
                <section className="flex flex-col pb-20 max-w-5xl">
                    <div className="w-full">
                        <div className="flex flex-col justify-center max-w-3xl mx-auto">
                            <h1 className="text-4xl font-black pb-12 lg:text-7xl">{props.title}</h1>
                            <h2 className="text-2xl font-normal lg:text-3xl md:font-light mb-12">{props.subtitle}</h2>
                        </div>
                    </div>
                    <div className="flex flex-col max-lg:gap-y-6 lg:flex-row gap-x-6 w-full">
                        {props.txtData.map((data, index) => {
                            return (
                                <div key={index}>
                                    <h3 className="font-bold text-xl">{data[0]}</h3>
                                    <span className="text-[16px]" dangerouslySetInnerHTML={ {__html: data[1]} }></span>
                                </div>
                            );
                        })}
                    </div>
                </section>
                <ImageWrapper className="max-w-5xl">
                    {props.format === "img" && 
                        <img 
                            src={props.imgPath} 
                            alt={props.title} 
                        />
                    }
                    {props.format === "video" && 
                        <video 
                            src={props.imgPath} 
                            autoPlay={true} 
                            loop={true} 
                            controls={false}
                            muted={true}
                            playsInline={true}
                        />
                    }
                </ImageWrapper>
            </main>
        </section>
    )
}

export default ShowcaseCard;

const ImageWrapper = styled.div<{className: string, children: any}>`
  background: linear-gradient(180deg, #C063F9 0%, #8B7CFF 100%);
  border-radius: 0.8rem;
  padding: 0.4rem;
  
  @media (min-width: 1024px) {
    padding: 1.3rem;
  }

  img, video {
    border: 5px solid rgba(59, 17, 81, 0.40);
    border-radius: 0.8rem;

    @media(min-width: 1024px) {
      border: 10px solid rgba(59, 17, 81, 0.40);
    }
  }
`