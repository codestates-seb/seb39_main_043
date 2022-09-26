import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import atoms from "../components/atoms";
import molecules from "../components/molecules";
import myInfoSlice from "../slices/myPage";

// 내 캘린더 관리 페이지 (styled component)
const MyCalendarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

// 항목 title (styled component)
const MypageItem = styled(atoms.MypageItem)`
  margin-top: 32px;
`;

// 프로필 사진 (styled component)
const UpdateProfile = styled(atoms.UpdateProfile)`
  margin-top: 16px;
`;

// 프로필 닉네임, 수정 아이콘 wrapper (styled component)
const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  .profile-name {
    margin-right: 16px;
  }
`;

// 구분선 (styled component)
const Line = styled.hr`
  width: 100%;
  border-color: #f5f5f5;
  margin-top: 64px;
`;

// 항목 title, 초대 버튼 wrapper (styled component)
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

// 초대자 (styled component)
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

// 초대자 닉네임 (styled component)
const UserNickname = styled(atoms.UserNickname)`
  font-size: 24px;
  margin-left: 22px;
`;

// 초대자 모달 (styled component)
const InviteAttendeeModal = styled(molecules.InviteAttendeeModal)`
  position: absolute;
  z-index: 10;
  top: 20vh;
`;

// 닉네임, 상태메세지 수정 input (styled-component)
const UpdateInput = styled.input`
  width: 200px;
  border: none;
  outline: none;
  text-align: center;
  font-size: 24px;
  color: #338cff;
  background-color: #f5f5f5;
  padding: 4px;
  border-radius: 4px;
  margin-right: 4px;
`;

// <--------- MyCalendarPage --------->
const MyCalendarPage = () => {
  const myInfo = useSelector((state) => state.myInfo);
  const dispatch = useDispatch();

  const [isTitle, setIsTitle] = useState(false);
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
        if (e.type === "click") {
          setIsInviteAttendeeModal(false);
          return;
        }

        if (e.type === "keydown" && e.key === "Escape") {
          setIsInviteAttendeeModal(false);
          return;
        }
        break;

      default:
    }
  };

  // 마이페이지 정보 수정 전
  const beforeUpdate = (target) => {
    switch (target) {
      case "ProfileName":
        setIsTitle(true);
        break;

      default:
    }
  };

  // 마이페이지 정보 수정 후
  const afterUpdate = (e, target) => {
    switch (target) {
      case "ProfileName":
        if (e.key === "Enter") {
          dispatch(myInfoSlice.actions.changeProfileTitle({ title: e.target.value }));
          setIsTitle(false);
        }
        break;

      default:
    }
  };

  // 이미지 변경 함수
  const handleChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => dispatch(myInfoSlice.actions.changeProfileCalendarImg({ calendarImg: e.target.result }));
    }
  };

  return (
    <MyCalendarWrapper>
      {isInviteAttendeeModal && <InviteAttendeeModal onClick={(e) => closeModal(e, "InviteAttendeeModal")} />}
      <MypageItem content="캘린더 정보" />
      <UpdateProfile imgUrl={myInfo.calendarImg} onChange={handleChange} />

      <ProfileWrapper>
        {isTitle || (
          <>
            <atoms.ProfileName className="profile-name" content={myInfo.title} />
            <atoms.UpdateIcon onClick={() => beforeUpdate("ProfileName")} />
          </>
        )}

        {isTitle && <UpdateInput defaultValue={myInfo.title} onKeyDown={(e) => afterUpdate(e, "ProfileName")} spellcheck="false" />}
      </ProfileWrapper>

      <Line />

      <TitleWrapper>
        <MypageItem className="title" content="초대된 사람들" />
        <atoms.PlusCircleButton color={"#DB9000"} onClick={() => openModal("InviteAttendeeModal")} />
      </TitleWrapper>

      <AttendeeWrapper>
        {myInfo.member.map((value, index) => (
          <div className="test" key={index}>
            <atoms.UserProfile />
            <div className="user-info">
              <UserNickname content={value} />
            </div>
            <atoms.CloseIcon />
          </div>
        ))}
      </AttendeeWrapper>
    </MyCalendarWrapper>
  );
};

export default MyCalendarPage;
