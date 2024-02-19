import styled from "styled-components";
import tw from "twin.macro";

const MessageWrapper = styled.div<{ children: any }>`
  ${tw`
    bg-[linear-gradient(90deg, #4B8AFF 0%, #6B50FF 100%)]
    w-full
    px-6
    py-12
    xl:py-28
    text-2xl
    flex
    justify-center
    w-3/4
    xl:mt-24
    // mb-4
    xl:leading-[50px]

    `}
    .text {
      ${tw`
        xl:text-[42px]
        xl:max-w-4xl
        max-xl:max-w-3xl
        font-light
      `}
    }
`;

const Message = () => {
  return (
    <MessageWrapper>
      <div className="text">
        We believe in the democratization of scientific-grade simulation tools by making it easy for anyone to develop physics-based simulations and deploy them in their workflows, regardless of their technical skills.
      </div>
    </MessageWrapper>
  )
}

export default Message;