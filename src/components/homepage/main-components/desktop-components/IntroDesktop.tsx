import styled from "styled-components";
import tw from "twin.macro";

const IntroDesktopWrapper = styled.div`

`;

const IntroDesktop = () => {
  return (
    <IntroDesktopWrapper>
      <div className="all-container">
        <div className="left-side">
          <div className="logo-title">
            <img src="assets/simlai/simlai-logo.svg" alt="" />
            <img src="assets/simlai/simlai-title.svg" alt="" />
          </div>
          <div className="title">Tame the physics of your projects in hours!</div>
          <div className="subtitle">SIML.ai is a software platform for working with high-performance AI-based numerical simulators.</div>
          <div className="join-waitlist">
            <div className="label">Join private alpha waitlist</div>
            <div className="email-button">
              <input type="email" name="" id="" placeholder="your@email.com"/>
              <button>JOIN</button>
            </div>
          </div>
        </div>
        <div className="right-side">
          <img src="assets/simlai/desktop-intro-pics/static.svg" alt="" />
          <img src="assets/simlai/desktop-intro-pics/rotate1.svg" alt="" />
          <img src="assets/simlai/desktop-intro-pics/rotate2.svg" alt="" />
          <img src="assets/simlai/desktop-intro-pics/rotate3.svg" alt="" />
        </div>
      </div>
    </IntroDesktopWrapper>
  );
}

export default IntroDesktop;