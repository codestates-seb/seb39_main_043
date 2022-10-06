import axios from 'axios';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';
import atoms from '../atoms';

// <--- styled component --->
const InviteAttendeeModalWrapper = styled.div`
  background-color: white;
`;

// <--- inviteAttendeeModal --->
const InviteAttendeeModal = ({ className }) => {
  const [inputValue, setInputValue] = useState(''); // 초대자 이메일
  const modalState = useSelector((state) => state.modal);
  const selectedState = useSelector((state) => state.selected);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // [기능]  캘린더 공유자 초대하기
  const addAttendee = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/members`);
    const id = data.filter((value) => inputValue === value.email);

    if (id.length !== 0) {
      await axios.post(`${process.env.REACT_APP_API_URL}/calendars/attendees`, {
        calendarId: selectedState.calendarId,
        memberId: id[0].memberId,
      });
      dispatch(modalSlice.actions.modal({ ...modalState, inviteAttendeeModal: false }));
    } else {
      alert('가입되지 않은 사용자입니다.');
      return;
    }
  };

  const muatateAddAttendee = useMutation(addAttendee, { onSuccess: () => queryClient.invalidateQueries(['calendar', selectedState.calendarId]) });

  return (
    <InviteAttendeeModalWrapper className={className}>
      {/*<--- 네비게이션 바 ---> */}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, inviteAttendeeModal: false }))} />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <atoms.InputTitle placeholder={'초대할 사람의 이메일을 입력하세요'} value={inputValue} onChange={handleChange} />

        {/* 초대 버튼 */}
        <atoms.ModalButton color={'#007FDB'} value="초대" onClick={() => muatateAddAttendee.mutate()} />
      </atoms.ModalContentContainer>
    </InviteAttendeeModalWrapper>
  );
};

export default InviteAttendeeModal;
