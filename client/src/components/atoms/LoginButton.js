import styled from 'styled-components';

const LoginButtonWrapper = styled.div`
  width: 442px;
  height: 60px;
  border: 1px solid black;
`;

const LoginButton = () => {
  return <LoginButtonWrapper>로그인</LoginButtonWrapper>;
};

export default LoginButton;
