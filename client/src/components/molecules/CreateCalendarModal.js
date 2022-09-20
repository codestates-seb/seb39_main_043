import styled from "styled-components";
import atoms from "../atoms";

const CreateCalendarModalWrapper = styled.div``;

const StyledModalButton = styled(atoms.ModalButton)`
  margin-top: 16px;
`;

const CreateCalendarModal = () => {
  return (
    <CreateCalendarModalWrapper>
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon />
      </atoms.ModalNavigationBar>

      <atoms.ModalContentContainer>
        <atoms.InputTitle placeholder={"캘린더 이름을 입력하세요"} />
        <div></div>
        <StyledModalButton color={"#007FDB"} value="생성" />
      </atoms.ModalContentContainer>
    </CreateCalendarModalWrapper>
  );
};

export default CreateCalendarModal;
