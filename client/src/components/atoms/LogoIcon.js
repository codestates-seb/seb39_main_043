import styled from "styled-components";

const LogoIconWrapper = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-icon {
    text-align: center;
    line-height: 1;
  }
`;

const LogoIcon = ({ className }) => {
  return (
    <LogoIconWrapper className={className}>
      <div className="logo-icon">
        Social
        <br />
        Calendar
      </div>
    </LogoIconWrapper>
  );
};

export default LogoIcon;
