import styled from 'styled-components';
import atoms from '../components/atoms';
import molecules from '../components/molecules';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';

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

const postMembers = async (name, email, password) => {
  console.log('axios', name, email, password);
  await axios
    .post(`${process.env.REACT_APP_API_URL}/members`, { name: name, email: email, password: password })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const JoinPage = () => {
  const join = useSelector((state) => state.join);

  return (
    <JoinPageWrapper>
      <h1 className="join-title">회원가입</h1>
      <JoinForm />
      <JoinButton onClick={() => postMembers(join.name, join.email, join.password)} />
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
