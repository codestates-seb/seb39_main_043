import { useState } from "react";
import styled from "styled-components";
import atoms from "../components/atoms";
import molecules from "../components/molecules";

const MyCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const MypageItem = styled(atoms.MypageItem)`
  margin-top: 32px;
`;

const UpdateProfile = styled(atoms.UpdateProfile)`
  margin-top: 16px;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  .profile-name {
    margin-right: 16px;
  }
`;

const Line = styled.hr`
  width: 100%;
  border-color: #f5f5f5;
  margin-top: 64px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;

  .title {
    margin: 0;
    margin-right: 16px;
  }
`;

const AttendeeWrapper = styled.div`
  width: 300px;
  overflow-y: scroll;
  height: 300px;

  .test {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .user-info {
    width: 80%;
    display: flex;
    align-items: center;
  }
`;

const UserNickname = styled(atoms.UserNickname)`
  font-size: 24px;
  margin-left: 22px;
`;

const InviteAttendeeModal = styled(molecules.InviteAttendeeModal)`
  position: absolute;
  z-index: 10;
  top: 20vh;
`;

const MyCalendarPage = () => {
  const [isInviteAttendeeModal, setIsInviteAttendeeModal] = useState(false); // 초대자 모달

  // 모달 open 함수
  const openModal = (target) => {
    switch (target) {
      case "InviteAttendeeModal":
        setIsInviteAttendeeModal(true);
        break;

      default:
    }
  };

  // 모달 close 함수
  const closeModal = (e, target) => {
    switch (target) {
      case "InviteAttendeeModal":
        switch (e.type) {
          case "click":
            setIsInviteAttendeeModal(false);
            break;

          case "keydown":
            if (e.key === "Escape") setIsInviteAttendeeModal(false);
            break;

          default:
        }

      default:
    }
  };
  return (
    <MyCalendarWrapper>
      {isInviteAttendeeModal && <InviteAttendeeModal onClick={(e) => closeModal(e, "InviteAttendeeModal")} />}
      <MypageItem content="캘린더 정보" />
      <UpdateProfile />

      <ProfileWrapper>
        <atoms.ProfileName className="profile-name" content={"appleCalendar"} />
        <atoms.UpdateIcon />
      </ProfileWrapper>

      <Line />

      <TitleWrapper>
        <MypageItem className="title" content="초대된 사람들" />
        <atoms.PlusCircleButton color={"#DB9000"} onClick={() => openModal("InviteAttendeeModal")} />
      </TitleWrapper>

      <AttendeeWrapper>
        <div className="test">
          <atoms.UserProfile />
          <div className="user-info">
            <UserNickname content={"banana"} />
          </div>
          <atoms.CloseIcon />
        </div>

        <div className="test">
          <atoms.UserProfile />
          <div className="user-info">
            <UserNickname content={"bananaasdf"} />
          </div>
          <atoms.CloseIcon />
        </div>

        <div className="test">
          <atoms.UserProfile />
          <div className="user-info">
            <UserNickname content={"bananaasdf"} />
          </div>
          <atoms.CloseIcon />
        </div>

        <div className="test">
          <atoms.UserProfile />
          <div className="user-info">
            <UserNickname content={"bananaasdf"} />
          </div>
          <atoms.CloseIcon />
        </div>
      </AttendeeWrapper>
    </MyCalendarWrapper>
  );
};

export default MyCalendarPage;
