import styled from "styled-components";

interface EngagementCardProps {
    title: string,
    subtitle: string,
    buttonText: string,
    buttonHref: string,
    bgColor: string,
}

const BgWrapper = styled.div<{ bgColor: string}>`
    background: ${props => props.bgColor};
    border-radius: 0.8rem;
    width: 100%;
    height: 100%;
`;

const EngagementCard = (props: EngagementCardProps) => {


    return (
        <section className="flex w-full h-full">
            <BgWrapper bgColor={props.bgColor}>
                <main className="flex flex-col gap-y-8 py-16 px-8 w-full justify-between h-full">
                    <h1 className="text-3xl font-bold lg:text-4xl">{props.title}</h1>
                    <h2 className="text-xl">{props.subtitle}</h2>
                    <a href={props.buttonHref} className="text-sm px-4 py-[11px] border rounded w-fit font-bold hover:bg-white hover:text-black duration-[0.6s]">{props.buttonText}</a>
                </main>
            </BgWrapper>
        </section>
    )
}

export default EngagementCard;

