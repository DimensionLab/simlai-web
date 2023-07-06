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
`;

const EngagementCard = (props: EngagementCardProps) => {


    return (
        <section className="flex w-full h-full">
            <BgWrapper bgColor={props.bgColor}>
                <main className="flex flex-col gap-y-8 py-16 px-4">
                    <h1 className="text-3xl font-bold">{props.title}</h1>
                    <h2 className="text-xl">{props.subtitle}</h2>
                    <a href={props.buttonHref} className="text-sm px-6 py-4 border rounded w-fit font-bold hover:bg-white hover:text-black duration-[0.6s]">{props.buttonText}</a>
                </main>
            </BgWrapper>
        </section>
    )
}

export default EngagementCard;

