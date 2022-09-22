import styled from "styled-components";
import atoms from "../components/atoms";
import molecules from "../components/molecules";
import { Link } from "react-router-dom";

const JoinPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .join-title {
    margin-top: 50px;
  }

  .login-link {
    margin-top: 32px;
  }
`;

const JoinForm = styled(molecules.JoinForm)`
  margin-top: 48px;
`;

const JoinButton = styled(atoms.JoinButton)`
  margin-top: 48px;
`;

const Line = styled.hr`
  width: 440px;
  border-color: #f5f5f5;
  margin-top: 32px;
`;

const SocialLoginButtonGoogle = styled(atoms.SocialLoginButtonGoogle)`
  margin-top: 32px;
`;

const JoinPage = () => {
  return (
    <JoinPageWrapper>
      <h1 className="join-title">회원가입</h1>
      <JoinForm />
      <JoinButton />
      <Line />
      <SocialLoginButtonGoogle />
      <div className="login-link">
        <span>이미 가입 하셨나요? </span>
        <Link to="/">로그인 페이지로 이동하기</Link>
      </div>
    </JoinPageWrapper>
  );
};

export default JoinPage;
