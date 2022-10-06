import atoms from '../atoms';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../slices/modalSlice';
import { persistor } from '../../store';
import { useQuery } from 'react-query';
import axios from 'axios';
import selectedSlice from '../../slices/selectedSlice';

const MypageSidebar = ({ className }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);

  // [기능] 로그아웃
  const purge = async () => {
    const result = window.confirm('로그아웃 하시겠습니까?');
    if (result) {
      dispatch(modalSlice.actions.modal({ ...modalState, mypageSidebarModal: false }));
      dispatch(selectedSlice.actions.selected({}));
      navigate('/', { replace: true });
      setTimeout(async () => {
        await persistor.purge();
      }, 500);
    }
  };

  // [기능] 사용자 정보 불러오기
  const { isLoading, isError, error, data } = useQuery('userInfo', async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/members/${user.id}`);
    return data;
  });

  if (isLoading) return <div>loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <atoms.MypageSidebarContainer className={className}>
      <atoms.MypageSidebarNickname content={data.name} />
      <Link to="/mypage/myinfopage">
        <atoms.MypageSidebarItem content={'내 정보 수정'} />
      </Link>

      <Link to="/mypage/mycalendarpage">
        <atoms.MypageSidebarItem content={'캘린더 관리'} />
      </Link>
      <atoms.MypageSidebarLogout onClick={purge} />
    </atoms.MypageSidebarContainer>
  );
};

export default MypageSidebar;
