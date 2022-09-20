import styled from "styled-components";
import atoms from "../atoms";

const InviteAttendeeModalWrapper = styled.div``;

const StyledModalButton = styled(atoms.ModalButton)`
  margin-top: 16px;
`;

const InviteAttendeeModal = () => {
  return (
    <InviteAttendeeModalWrapper>
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon />
      </atoms.ModalNavigationBar>

      <atoms.ModalContentContainer>
        <atoms.InputTitle placeholder={"초대할 사람의 이메일을 입력하세요"} />
        <div></div>
        <StyledModalButton color={"#007FDB"} value="초대" />
      </atoms.ModalContentContainer>
    </InviteAttendeeModalWrapper>
  );
};

export default InviteAttendeeModal;
