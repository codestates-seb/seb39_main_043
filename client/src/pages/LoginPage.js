import styled from 'styled-components';
import atoms from '../components/atoms';
import molecules from '../components/molecules';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import warningSlice from '../slices/warningSlice';
import userSlice from '../slices/userSlice';
import calendarSlice from '../slices/calendarSlice';
import selectedSlice from '../slices/selectedSlice';

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

// const login = (username, password) => {
//   fetch(`${process.env.REACT_APP_API_URL}/login`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ username, password }),
//   }).then((res) => {
//     console.log(res);
//   });
// };

const LoginPage = () => {
  const user = useSelector((state) => state.user);
  const calendar = useSelector((state) => state.calendar);
  const loginWarning = useSelector((state) => state.warning.loginWarning);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(user);
  console.log('email', user.email);
  console.log('password', user.password);

  // const login = () => {
  //   axios
  //     .post(
  //       `${process.env.REACT_APP_API_URL}/login`,
  //       {
  //         username: user.email,
  //         password: user.password,
  //       }
  //       // { withCredentials: true }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const members = useQuery('members', async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/members`);
    // console.log('response : ', res);
    const data = res.data;
    return data;
  });
  if (members.isLoading) return <h1>Loading...</h1>;
  if (members.isError)
    return (
      <>
        <h1>Something is wrong</h1>
        <p>{members.error.toString()}</p>
      </>
    );

  if (!members.data) return <div></div>;
  if (members.data) console.log('data : ', members.data);

  const isUser = (email, password, userData) => {
    let result = userData.filter((el) => el.email === email && el.password === password);
    console.log('result', result);

    if (result.length === 0) {
      dispatch(warningSlice.actions.log({ loginWarning: '' }));
    } else {
      dispatch(warningSlice.actions.log({ loginWarning: 'hidden' }));
      dispatch(userSlice.actions.user({ name: result[0].name, id: result[0].memberId, email: result[0].email, password: result[0].password }));
      let initialCalendar = result[0].adminCalendars.concat(result[0].attendedCalendars)[0];
      if (initialCalendar === undefined) {
        dispatch(selectedSlice.actions.selected({ calendarId: 0 }));
      } else {
        dispatch(selectedSlice.actions.selected({ calendarId: initialCalendar.calendarId }));
      }
      navigate('/mainpage'); // (memo)로그인 성공 시 메인페이지로 이동
    }
  };

  return (
    <LoginPageWrapper>
      <LogoIcon />
      <LoginForm />
      <WarningBox className={loginWarning} value={`아이디 또는 비밀번호를 잘못 입력했습니다.\n입력한 내용을 다시 확인해주세요.`} />
      <LoginButton color={'#007FDB'} onClick={() => isUser(user.email, user.password, members.data)} />
      {/* <LoginButton color={'#007FDB'} onClick={login} /> */}
      <Line />
      <SocialLoginButtonGoogle />
      <div className="join-link">
        <span>아직 회원이 아니신가요? </span>
        <Link to="/joinpage" style={{ color: '#007FDB' }}>
          회원가입 하기
        </Link>
      </div>
    </LoginPageWrapper>
  );
};

export default LoginPage;
