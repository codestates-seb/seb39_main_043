import styled from "styled-components";
import atoms from "../atoms";

const LoginFormWrapper = styled.div``;

const LoginForm = ({ className }) => {
  return (
    <LoginFormWrapper className={className}>
      <atoms.InputLoginId />
      <atoms.InputLoginPassword />
    </LoginFormWrapper>
  );
};

export default LoginForm;
