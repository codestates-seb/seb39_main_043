import styled from "styled-components";
import atoms from "../atoms";

const CreateEventModalWrapper = styled.div``;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: 16px;

  .item {
    display: flex;
    align-items: center;
    width: 20%;
  }
`;

const StyledScheduleDetailTitle = styled(atoms.ScheduleDetailTitle)`
  margin-left: 8px;
`;

const StyledModalButton = styled(atoms.ModalButton)`
  margin-top: 16px;
`;

const CreateEventModal = () => {
  return (
    <CreateEventModalWrapper>
      {/* <--- NavigationBar --->*/}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon />
      </atoms.ModalNavigationBar>

      {/*<--- Container --->*/}
      <atoms.ModalContentContainer>
        <div>
          <atoms.InputTitle placeholder={"제목을 입력하세요"} />
        </div>

        <ItemWrapper>
          <div className="item">
            <atoms.ClockIcon />
            <StyledScheduleDetailTitle value={"일시"} />
          </div>
          <atoms.ScheduleDetailInput placeholder={"yyyy.mm.dd hh:mm ~ yyyy.mm.dd hh:mm"} />
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.PeopleIcon />
            <StyledScheduleDetailTitle value={"참석자"} />
          </div>
          <atoms.ScheduleDetailInput placeholder={"참석자의 이메일을 입력하세요"} />
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.PlaceIcon />
            <StyledScheduleDetailTitle value={"위치"} />
          </div>
          <atoms.ScheduleDetailInput placeholder={"장소를 입력하세요"} />
        </ItemWrapper>

        <ItemWrapper>
          <div className="item">
            <atoms.NoteIcon />
            <StyledScheduleDetailTitle value={"설명"} />
          </div>
          <atoms.ScheduleDetailInput placeholder={"설명을 입력하세요"} />
        </ItemWrapper>

        <StyledModalButton color={"#007FDB"} value={"저장"} />
      </atoms.ModalContentContainer>
    </CreateEventModalWrapper>
  );
};

export default CreateEventModal;
