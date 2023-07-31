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

  .signup-container {
    ${tw`
      px-4
      flex
      flex-col
      gap-y-2
      pt-4
    `}

    .label {
      ${tw`
        text-sm
      `}
    }

    .entry-container {
      ${tw`
        flex
        flex-row
        w-full
        md:w-3/4
        lg:w-3/4
        xl:w-full
        justify-between
        gap-x-2
      `}

      input {
        ${tw`
          w-3/4
          bg-[#373A45]
          p-2
          text-lg
          rounded
          text-gray-500
        `}
      }

      button {
        ${tw`
          // bg-[#6B50FF]
          p-4
          rounded
          w-1/4
          text-sm
          font-bold
        `}
      }
    }
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
      <form className="signup-container" onSubmit={event => {
        event.preventDefault();
        handleSubmit(fields)
      }}>
        <div className="label">Join our newsletter</div>
        <div className="entry-container">
          <input 
            type="email" 
            name="" 
            id="EMAIL" 
            value={fields.EMAIL}
            onChange={handleFieldChange}
            placeholder="your@email.com"/>
          <button className={handleResult()} disabled={success || fields.EMAIL === "" ? true : false}>
            <div>{loading ? "JOINING" : (success ? "JOINED" : "JOIN")}</div>
          </button>
        </div>
      </form>
    </SignUpWrapper>
  );
}

export default SignUp;