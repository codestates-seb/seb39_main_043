import atoms from '../atoms';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../slices/modalSlice';
import { persistor } from '../../store';

const MypageSidebar = ({ className }) => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);

  // [함수] 로그아웃
  // const logout = () => {
  //   const result = window.confirm("로그아웃 하시겠습니까?");
  //   if (result) {
  //     dispatch(modalSlice.actions.modal({ ...modalState, mypageSidebarModal: false }));
  //     navigate("/", { replace: true });
  //     // (memo) navigate의 인자로 {replace:true}를 넣으면 navigate에 적힌 주소로 넘어간 후 뒤로가기를 하더라도 방금의 페이지로 돌아오지 못한다.
  //     //        replace의 default 값은 false로 뒤로가기가 가능하다.
  //   }
  // };

  const purge = async () => {
    await persistor.purge();
    dispatch(modalSlice.actions.modal({}));
    navigate('/', { replace: true });
  };

  return (
    <atoms.MypageSidebarContainer className={className}>
      <atoms.MypageSidebarNickname content={user.name} />
      <Link to="/mypage/myinfopage">
        <atoms.MypageSidebarItem content={'내 정보 수정'} />
      </Link>

      <Link to="/mypage/mycalendarpage">
        <atoms.MypageSidebarItem content={'캘린더 관리'} />
      </Link>
      <atoms.MypageSidebarLogout onClick={() => purge()} />
      {/* <atoms.MypageSidebarLogout onClick={logout} /> */}
    </atoms.MypageSidebarContainer>
  );
};

export default MypageSidebar;
