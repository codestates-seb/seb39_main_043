import styled from "styled-components";
import atoms from "../components/atoms";
import molecules from "../components/molecules";
import { Link } from "react-router-dom";

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .join-link {
    margin-top: 32px;
  }
`;

const LogoIcon = styled(atoms.LogoIcon)`
  margin-top: 50px;
  font-size: 48px;
`;

const LoginForm = styled(molecules.LoginForm)`
  margin-top: 48px;
`;

const WarningBox = styled(atoms.WarningBox)`
  margin-top: 8px;
`;

const LoginButton = styled(atoms.LoginButton)`
  margin-top: 16px;
`;

const Line = styled.hr`
  width: 440px;
  border-color: #f5f5f5;
  margin-top: 32px;
`;

const SocialLoginButtonGoogle = styled(atoms.SocialLoginButtonGoogle)`
  margin-top: 32px;
`;

const LoginPage = () => {
  return (
    <LoginPageWrapper>
      <LogoIcon />
      <LoginForm />
      <WarningBox className={"hidden"} value={`아이디 또는 비밀번호를 잘못 입력했습니다.\n입력한 내용을 다시 확인해주세요.`} />
      <LoginButton color={"#007FDB"} />
      <Line />
      <SocialLoginButtonGoogle />
      <div className="join-link">
        <span>아직 회원이 아니신가요? </span>
        <Link to="/joinpage">회원가입 하기</Link>
      </div>
    </LoginPageWrapper>
  );
};

export default LoginPage;
