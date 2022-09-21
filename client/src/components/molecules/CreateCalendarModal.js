import styled from "styled-components";
import atoms from "../atoms";

// <--- styled component --->
const CreateCalendarModalWrapper = styled.div`
  background-color: white;
`;

// <--- CreateCalendarModal --->
const CreateCalendarModal = ({ className, onClick, submitInfo }) => {
  const obj = {};

  const handleChange = (event) => {
    obj.calendarTitle = event.target.value;
  };

  return (
    <CreateCalendarModalWrapper className={className}>
      {/*<--- 네비게이션 바 ---> */}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon onClick={onClick} />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <atoms.InputTitle placeholder={"캘린더 이름을 입력하세요"} onChange={handleChange} />

        {/* 캘린더 생성 버튼 */}
        <atoms.ModalButton color={"#007FDB"} value="생성" onClick={() => submitInfo(obj)} />
      </atoms.ModalContentContainer>
    </CreateCalendarModalWrapper>
  );
};

export default CreateCalendarModal;
