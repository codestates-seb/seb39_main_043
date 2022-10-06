import styled from 'styled-components';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../slices/modalSlice';

const UserProfileWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #d9d9d9;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  .profile-image {
    width: 40px;
    height: 40px;
  }
`;

const UserProfile = ({ imgUrl, className }) => {
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const openMypageSidebarModal = () => {
    dispatch(modalSlice.actions.modal({ ...modalState, mypageSidebarModal: !modalState.mypageSidebarModal }));
  };
  return (
    <UserProfileWrapper className={className} onClick={openMypageSidebarModal}>
      {imgUrl ? <img className="profile-image" src={imgUrl} /> : <CgProfile size={40} />}
    </UserProfileWrapper>
  );
};

export default UserProfile;
