import styled from 'styled-components';

const LoginButtonWrapper = styled.div`
  width: 440px;
  height: 60px;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  .login-text {
    font-size: 24px;
  }
`;

const LoginButton = ({ className, color, onClick }) => {
  return (
    <LoginButtonWrapper className={className} color={color} onClick={onClick}>
      <span className="login-text">로그인</span>
    </LoginButtonWrapper>
  );
};

export default LoginButton;
