import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import calendarSlice from '../../slices/calendarSlice';
import modalSlice from '../../slices/modalSlice';
import selectedSlice from '../../slices/selectedSlice';
import atoms from '../atoms';

// <--- styled component --->
const CreateCalendarModalWrapper = styled.div`
  background-color: white;
`;

// <--- CreateCalendarModal --->
const CreateCalendarModal = ({ className }) => {
  const modalState = useSelector((state) => state.modal);
  const selectedState = useSelector((state) => state.selected);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  let title = '';
  const handleChange = (event) => {
    title = event.target.value;
  };

  // [함수] 캘린더 생성
  const createCalendar = useMutation(
    async () => {
      await axios.post(`${process.env.REACT_APP_API_URL}/calendars`, { memberId: user.id, title }).then((res) => {
        dispatch(selectedSlice.actions.selected({ ...selectedState, calendarId: res.data.calendarId }));
        console.log('calendar : ', res.data);
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('calendar');
        queryClient.invalidateQueries('userInfo');
        dispatch(modalSlice.actions.modal({ ...modalState, createCalendarModal: false, calendarSidebarModal: false }));
      },
    }
  );

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
        <atoms.ModalButton color={'#007FDB'} value="생성" onClick={() => createCalendar.mutate()} />
      </atoms.ModalContentContainer>
    </CreateCalendarModalWrapper>
  );
};

export default CreateCalendarModal;
