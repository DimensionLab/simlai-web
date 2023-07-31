import styled from "styled-components";
import tw from "twin.macro";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const IntroDesktopWrapper = styled.div`
  ${tw`
    xl:my-12
    xl:pt-20
  `}

  .all-container {
    ${tw`
      flex
      flex-row
      mb-20
      gap-x-44
      px-12
      // pl-12
    `}
    .left-side {
      ${tw`
        flex
        flex-col
        w-1/2
        gap-y-10
      `}
      .logo-title {
        ${tw`
          flex
          flex-row
          items-end
          gap-x-10
        `}
        
        #siml-logo {
          ${tw`
            w-20
          `}
        }
        #siml-title {
          ${tw`
            w-48
          `}
        }
      }
      .title {
        ${tw`
          font-bold
          text-5xl
        `}
      }
      .subtitle {
        ${tw`
          text-[#B4B6C3]
          text-xl
        `}
      }
      .join-waitlist {
        .label {
          ${tw`
            text-xs
            text-[#D0D2DF]
            pb-1
          `}
        }
        .email-button {
          ${tw`
            w-full
            flex
            justify-start
            gap-x-2
          `}
          input {
            ${tw`
              w-3/4
              px-[11px]
              py-[16px]
              bg-[#373A45]
              // text-[#7C7F8B]
              text-[14px]
              w-[288px]
              h-[40px]
              rounded-[4px]
            `}
          }
          button {
            ${tw`
              // bg-[#6B50FF]
              rounded-[4px]
              px-[11px]
              py-[16px]
              w-[66px]
              h-[40px]
              text-[14px]
              flex
              font-bold
              justify-center
            `}

            div {
              ${tw`
                flex
                self-center
              `}
            }
          }
        }
      }
    }
    .right-side {
      ${tw`
        w-1/2
      `}
      .container {
        ${tw`
          relative
        `}

        .static {
          ${tw`
            w-full
          `}
        }

        .rotate {
          ${tw`
            absolute
            bottom-0
          `}
        }

        .one {
          ${tw`
            w-[50%]
            left-[-3%]
            bottom-[-22%]
          `}
        }

        .two {
          ${tw`
            w-[40%]
            left-[30%]
            bottom-[-30%]
          `}
        }

        .three {
          ${tw`
            w-[50%]
            right-[2%]
            bottom-[-15%]
          `}
        }
      }
    }
  }
`;

const IntroDesktop = () => {
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
    <IntroDesktopWrapper>
      <div className="all-container">
        <div className="left-side">
          <div className="logo-title">
            <img src="assets/simlai/simlai-logo.svg" alt="siml.ai logo" id="siml-logo"/>
            <img src="assets/simlai/simlai-title.svg" alt="siml.ai title" id="siml-title"/>
          </div>
          <div className="title">Tame the physics <br/>of your projects in hours!</div>
          <div className="subtitle">Siml.ai is a software platform for working <br/> with high-performance AI-based numerical simulators.</div>
          <form className="join-waitlist" onSubmit={event => {
            event.preventDefault();
            handleSubmit(fields);
          }}>
            <div className="label">Join our newsletter</div>
            <div className="email-button">
              <input 
                type="email" 
                name="" 
                id="EMAIL" 
                // autoFocus
                value={fields.EMAIL}
                onChange={handleFieldChange}
                placeholder="your@email.com"
              />
              <button className={handleResult()} disabled={success || fields.EMAIL === "" ? true : false}>
                <div>{loading ? "JOINING" : (success ? "JOINED" : "JOIN")}</div>
              </button>

              {/* {loading && 
                <div>Submitting...</div> } */}
            
              {/* {error && 
                <div>{message}</div>} */}

              {/* {success && 
                <div className="flex items-center text-sm font-light ">{message}</div> } */}
            </div>
          </form>
        </div>
        <div className="right-side">
          <div className="container">
            <img src="assets/simlai/desktop-intro-pics/static.png" alt="model engineer screenshot" className="static"/>
            <img src="assets/simlai/desktop-intro-pics/rotate1.png" alt="screenshot from siml" className="rotate one"/>
            <img src="assets/simlai/desktop-intro-pics/rotate2.png" alt="screenshot from siml" className="rotate two"/>
            <img src="assets/simlai/desktop-intro-pics/rotate3.png" alt="screenshot from siml" className="rotate three"/>
          </div>
        </div>
      </div>
    </IntroDesktopWrapper>
  );
}

export default IntroDesktop;