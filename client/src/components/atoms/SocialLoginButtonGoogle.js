import styled from "styled-components";

const SocialLoginButtonGoogleWrapper = styled.div`
  width: 440px;
  height: 60px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .google-logo {
    width: 24px;
    height: 24px;
  }
  .btn-name {
    font-size: 24px;
    margin-left: 10px;
  }
`;

const SocialLoginButtonGoogle = ({ className }) => {
  return (
    <SocialLoginButtonGoogleWrapper className={className}>
      <img className="google-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/300px-Google_%22G%22_Logo.svg.png" alt="google logo" />
      <span className="btn-name">구글</span>
    </SocialLoginButtonGoogleWrapper>
  );
};

export default SocialLoginButtonGoogle;
