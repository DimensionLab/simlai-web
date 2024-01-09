import styled from "styled-components";
import tw from "twin.macro";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

const FeaturesWrapper = styled.div`
  .signup-container {
      ${tw`
        // px-4
        flex
        flex-col
        gap-y-2
        pt-4
        // lg:hidden
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
          max-md:w-[3/4]
          max-lg:w-[3/4]
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

const Features = () => {
  const data = [
    ["assets/simlai/feature1.png", "Physics & AI", "Siml.ai combines state-of-the-art machine learning with physics simulation."],
    ["assets/simlai/feature2.png", "Fast", "AI-based simulators responds to your input in real-time, which means interactive visualization."],
    ["assets/simlai/feature3.png", "Web-based", "No need to install anything or be limited to specific platforms. Everything happens through web interface."],
    ["assets/simlai/feature4.png", "Painless scalability", "Our platform deals with the complexities of setting up cloud or HPC infrastructure for you."],
  ];

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
    <FeaturesWrapper className="w-full flex items-center justify-center">
      <div  id="features" className="w-full grid-cols-1 grid items-center justify-center px-4 gap-y-20 pt-6 pb-28 lg:grid-cols-2 lg:gap-x-8 h-full lg:py-44 max-w-6xl xl:gap-x-44">
        {data.map((feature, index) => (
          <div key={index} className="flex flex-col gap-y-6">
            <div className="w-full h-full object-cover">
              <img src={feature[0]} alt={feature[1]} className="w-full object-cover h-full"/>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="text-xl font-bold">{feature[1]}</div>
              <div className="text-md font-light">{feature[2]}</div>
            </div>
          </div>
        ))}
        <form className="signup-container" onSubmit={event => {
          event.preventDefault();
          handleSubmit(fields)
        }}>
          <div className="text-2xl lg:text-4xl font-bold col-span-2">Join our newsletter</div>
          <div className="text-lg lg:text-xl font-bold text-gray-400">Digital Twin</div>
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
      </div>
    </FeaturesWrapper>
  );
}

export default Features;