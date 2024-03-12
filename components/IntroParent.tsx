import IntroDesktop from "./IntroDesktop";
import IntroMobile from "./IntroMobile";

const IntroParent = () => {
  return (
    <div className="max-w-[1400px] mx-auto w-full">
      <div className="max-xl:hidden">
        <IntroDesktop />
      </div>
      <div className="xl:hidden">
        <IntroMobile />
      </div>
    </div>
  );
};

export default IntroParent;
