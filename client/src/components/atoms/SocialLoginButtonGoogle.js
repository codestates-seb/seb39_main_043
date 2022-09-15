import styled from 'styled-components';

const SocialLoginButtonGoogleWrapper = styled.div`
  width: 440px;
  height: 60px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn-name {
    font-size: 24px;
  }
`;

const SocialLoginButtonGoogle = () => {
  return (
    <SocialLoginButtonGoogleWrapper>
      <span className="btn-name">(IMG) 구글</span>
    </SocialLoginButtonGoogleWrapper>
  );
};

export default SocialLoginButtonGoogle;
