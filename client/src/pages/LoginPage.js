import styled from 'styled-components';
import atoms from '../components/atoms';
import molecules from '../components/molecules';
import { Link, Navigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import warningSlice from '../slices/warningSlice';
import userSlice from '../slices/userSlice';

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
  const user = useSelector((state) => state.user);
  const loginWarning = useSelector((state) => state.warning.loginWarning);
  const dispatch = useDispatch();

  const { data, isLoading, isError, error } = useQuery('login', async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/members`);
    return data;
  });
  if (isLoading) return <h1>Loading...</h1>;
  if (isError)
    return (
      <>
        <h1>Something is wrong</h1>
        <p>{error.toString()}</p>
      </>
    );
  if (!data) return <div></div>;
  if (data) console.log('data : ', data);

  const isUser = (email, password, userData) => {
    let result = userData.filter((el) => el.email === email && el.password === password);
    console.log('result', result);
    if (result.length === 0) {
      dispatch(warningSlice.actions.log({ loginWarning: '' }));
    } else {
      dispatch(userSlice.actions.user({ name: result[0].name, id: result[0].memberId, email: result[0].email, password: result[0].password }));
    }
  };

  return (
    <LoginPageWrapper>
      <LogoIcon />
      <LoginForm />
      <WarningBox className={loginWarning} value={`아이디 또는 비밀번호를 잘못 입력했습니다.\n입력한 내용을 다시 확인해주세요.`} />
      <LoginButton color={'#007FDB'} onClick={() => isUser(user.email, user.password, data)} />
      <Line />
      <SocialLoginButtonGoogle />
      <div className="join-link">
        <span>아직 회원이 아니신가요? </span>
        <Link to="/joinpage">회원가입 하기</Link>
      </div>
      {user.id && <Navigate to="/mainpage" replace={true} />}
    </LoginPageWrapper>
  );
};

export default LoginPage;
