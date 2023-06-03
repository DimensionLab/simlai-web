import styled from "styled-components";
import tw from "twin.macro";

const MessageWrapper = styled.div`
  ${tw`
    bg-[linear-gradient(90deg, #4B8AFF 0%, #6B50FF 100%)]
    w-full
    px-6
    py-10
    text-3xl
  `}
`;

const Message = () => {
  return (
    <MessageWrapper>
      We believe in the democratization of scientific-grade simulation tools by making it easy for anyone to develop <br/>physics-based simulations and deploy them in their workflows, regardless of their technical skills.
    </MessageWrapper>
  )
}

export default Message;