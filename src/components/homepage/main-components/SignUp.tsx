import styled from "styled-components";
import tw from "twin.macro";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const SignUpWrapper = styled.div`
  ${tw`
    flex
    flex-col
    gap-y-6
    overflow-hidden
    break-words
    xl:hidden
    pb-16
    pt-4
  `}

  .title {
    ${tw`
      text-3xl
      font-bold
      break-normal
      px-4
    `}
  }

  .subtitle {
    ${tw`
      text-xl
      px-4
      text-[#B4B6C3]
      break-normal
      font-normal
    `}
  }
`;

const SignUp = () => {
  const url = "https://dimensionlab.us17.list-manage.com/subscribe/post?u=fbb1d9b2d270a31e90eb9ca9f&id=d5c8cb4590&f_id=00a060e0f0";

  const {
    loading, 
    error, 
    success, 
    message, 
    handleSubmit
  } = useMailChimpForm(url);
  
  const { fields, handleFieldChange } = useFormFields( {
    EMAIL: "",
  });

  const handleResult = () => {
    if (success) {
      return `bg-lime-600`;
    }
    if (error) {
      return `bg-red-500`;
    }
    if (loading) {
      return `bg-orange-500`;
    }

    return `bg-[#6B50FF]`;
  }

  return (
    <SignUpWrapper>
      <div className="title">Tame the physics <br/> of your projects in hours!</div>
      <div className="subtitle">Siml.ai is a software platform for working with high-performance AI-based numerical simulators.</div>
      <div className="px-4 max-w-2xl">
        <div className="bg-[#6B50FF] w-full rounded-lg px-4 py-3 text-center hover:scale-105 duration-300">
          <a href="https://platform.siml.ai/" target="_blank">
            <div className="font-bold text-xl">Try out the platform now!</div>
          </a>
        </div>
      </div>
      <div className="flex flex-row gap-x-2 px-4 w-full">
        <a href="https://www.producthunt.com/products/siml-ai?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-siml&#0045;ai" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=555488&theme=dark" alt="Siml&#0046;ai - Software&#0032;platform&#0032;for&#0032;AI&#0045;driven&#0032;physics&#0032;simulations | Product Hunt" style={{width: "250px", height: "54px"}} width="250" height="54" /></a>
        <a href="https://theresanaiforthat.com/ai/siml-ai/?ref=embed" target="_blank"><img style={{width: "250px", height: "54px"}} src="https://media.theresanaiforthat.com/featured3.png" /></a>
      </div>
    </SignUpWrapper>
  );
}

export default SignUp;