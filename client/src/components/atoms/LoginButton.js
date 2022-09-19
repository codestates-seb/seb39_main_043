import styled from 'styled-components';

const LoginButtonWrapper = styled.div`
  width: 440px;
  height: 60px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #d9d9d9;
  .login-text {
    font-size: 24px;
  }
`;

const LoginButton = () => {
  return (
    <LoginButtonWrapper>
      <span className="login-text">로그인</span>
    </LoginButtonWrapper>
  );
};

export default LoginButton;
