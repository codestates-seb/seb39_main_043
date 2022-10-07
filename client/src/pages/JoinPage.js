import styled from 'styled-components';
import atoms from '../components/atoms';
import molecules from '../components/molecules';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import warningSlice from '../slices/warningSlice';

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

const WarningBox = styled(atoms.WarningBox)`
  margin-top: 5px;
`;

const JoinPage = () => {
  const join = useSelector((state) => state.join);
  const warningState = useSelector((state) => state.warning);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const postMembers = async (name, email, password) => {
    await axios
      .post(`${process.env.REACT_APP_API_URL}/members`, { name: name, email: email, password: password })
      .then((res) => {
        alert('회원가입 되셨습니다');
        dispatch(warningSlice.actions.join({ ...warningState, joinWarning: 'hidden' }));
        dispatch(warningSlice.actions.log({ loginWarning: 'hidden' }));
        navigate('/');
      })
      .catch((err) => {
        dispatch(warningSlice.actions.join({ ...warningState, joinWarning: '' }));
      });
  };

  return (
    <JoinPageWrapper>
      <h1 className="join-title">회원가입</h1>
      <JoinForm />
      <WarningBox className={warningState.joinWarning} value={'중복된 아이디 입니다. 새로운 아이디를 입력해주세요'} />
      <JoinButton onClick={() => postMembers(join.name, join.email, join.password)} />
      <Line />
      <SocialLoginButtonGoogle />
      <div className="login-link">
        <span>이미 가입 하셨나요? </span>
        <Link to="/" style={{ color: '#007FDB' }}>
          로그인 페이지로 이동하기
        </Link>
      </div>
    </JoinPageWrapper>
  );
};

export default JoinPage;
