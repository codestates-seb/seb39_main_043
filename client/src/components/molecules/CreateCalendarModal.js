import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';
import atoms from '../atoms';

// <--- styled component --->
const CreateCalendarModalWrapper = styled.div`
  background-color: white;
`;

// <--- CreateCalendarModal --->
const CreateCalendarModal = ({ className, submitInfo }) => {
  const obj = {};
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    obj.calendarTitle = event.target.value;
  };

  return (
    <CreateCalendarModalWrapper className={className}>
      {/*<--- 네비게이션 바 ---> */}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, createCalendarModal: false }))} />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <atoms.InputTitle placeholder={'캘린더 이름을 입력하세요'} onChange={handleChange} />

        {/* 캘린더 생성 버튼 */}
        <atoms.ModalButton color={'#007FDB'} value="생성" onClick={() => submitInfo(obj)} />
      </atoms.ModalContentContainer>
    </CreateCalendarModalWrapper>
  );
};

export default CreateCalendarModal;
