import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: #131314;
  width: 100%;
  color: #fff;
  gap: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div>SIML.AI</div>
      <div>All rights reserved</div>
    </FooterWrapper>
  );
};

export default Footer;