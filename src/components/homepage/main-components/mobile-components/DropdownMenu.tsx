import styled from "styled-components";
import tw from "twin.macro";

interface DropdownProps {
  open: boolean;
  onClose: () => void;
}
const DropdownMenuWrapper = styled.div<DropdownProps>`
  display: ${props => props.open ? 'block' : 'none'};
  ${tw`
    absolute
    bg-[#0D101B]
    w-full
    h-full
    left-0
    top-0
  `}

  .container {
    ${tw`
      px-4
    `}
    .header {
      ${tw`
        flex
        flex-row
        justify-between
        pt-8
      `}
      .logo-title {
        ${tw`
          flex
          flex-row
          gap-x-4
        `}
        
        #logo {
          ${tw`
            w-6
          `}
        }
        #title {
          ${tw`
            w-24
          `}
        }
      }
      .join-close {
        ${tw`
          flex
          flex-row
          items-center
          gap-x-4
        `}
        button {
          ${tw`
            bg-[#6B50FF]
            px-4
            py-2
            text-white
            font-black
          `}
        }
        // #close-btn {
        //   &:hover {
        //     cursor: pointer;
        //   }
        // }
        //doesnt work for some reason
      }
    }
  }
`;

const DropdownMenu = (props: DropdownProps ) => {
  return (
    <DropdownMenuWrapper open={props.open}>
      <div className="container">
        <div className="header">
          <div className="logo-title">
            <img src="assets/simlai/simlai-logo.svg" alt="simlai logo" id="logo"/>
            <img src="assets/simlai/simlai-title.svg" alt="simlai brand name" id="title"/>
          </div>
          <div className="join-close">
            <button>JOIN</button>
            <img src="assets/simlai/close-dropdown.svg" alt="" id="close-btn" onClick={props.onClose}/>
          </div>
        </div>
      </div>
    </DropdownMenuWrapper>
  );
}

export default DropdownMenu;