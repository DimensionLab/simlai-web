import styled from "styled-components";

interface ShowcaseCardProps {
    imgPath: string,
    title: string,
    subtitle: string,
    txtData: string[][],
}

const ShowcaseCard = (props: ShowcaseCardProps) => {
    return (
        <section className="w-full flex items-center justify-center">
            <main className="w-full flex flex-col px-4 py-16">
                <ImageWrapper>
                    <img src={props.imgPath} alt={props.title} />
                </ImageWrapper>
                <section className="flex flex-col pt-20">
                    <h1 className="text-4xl font-black pb-12">{props.title}</h1>
                    <div className="flex flex-col gap-y-8">
                        <h2 className="text-3xl font-normal">{props.subtitle}</h2>
                        <div className="flex flex-col gap-y-6">
                            {props.txtData.map((data, index) => {
                                return (
                                    <div key={index}>
                                        <h3 className="font-bold text-xl">{data[0]}</h3>
                                        <span className="text-[16px]">{data[1]}</span>
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