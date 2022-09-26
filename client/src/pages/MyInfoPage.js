import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import myInfoSlice from "../slices/myPage";
import styled from "styled-components";
import atoms from "../components/atoms";

// 내 정보 수정 페이지 (styled component)
const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

// <--------- MyInfoPage --------->
const MyInfoPage = () => {
  const myInfo = useSelector((state) => state.myInfo);
  const dispatch = useDispatch();

  const [isName, setIsName] = useState(false);
  const [isStatusMessage, setIsStatusMessage] = useState(false);

  // 마이페이지 정보 수정 전
  const beforeUpdate = (target) => {
    switch (target) {
      case "ProfileName":
        setIsName(true);
        break;
      case "ProfileMessage":
        setIsStatusMessage(true);
        break;
      default:
    }
  };

  // 마이페이지 정보 수정 후
  const afterUpdate = (e, target) => {
    switch (target) {
      case "ProfileName":
        if (e.key === "Enter") {
          dispatch(myInfoSlice.actions.changeProfileName({ name: e.target.value }));
          setIsName(false);
        }
        break;

      case "ProfileMessage":
        if (e.key === "Enter") {
          dispatch(myInfoSlice.actions.changeProfileMessage({ statusMessage: e.target.value }));
          setIsStatusMessage(false);
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
      reader.onload = (e) => dispatch(myInfoSlice.actions.changeProfileUserImg({ userImg: e.target.result }));
    }
  };

  return (
    <MyInfoWrapper>
      <MypageItem content="프로필 정보" />
      <UpdateProfile imgUrl={myInfo.userImg} onChange={handleChange} />

      <ProfileWrapper>
        {isName || (
          <>
            <atoms.ProfileName className="profile-name" content={myInfo.name} />
            <atoms.UpdateIcon onClick={() => beforeUpdate("ProfileName")} />
          </>
        )}
        {isName && <UpdateInput defaultValue={myInfo.name} onKeyDown={(e) => afterUpdate(e, "ProfileName")} spellcheck="false" />}
      </ProfileWrapper>

      <ProfileWrapper>
        {isStatusMessage || (
          <>
            <atoms.ProfileMessage className="profile-name" content={myInfo.statusMessage} />
            <atoms.UpdateIcon onClick={() => beforeUpdate("ProfileMessage")} />
          </>
        )}
        {isStatusMessage && <UpdateInput defaultValue={myInfo.statusMessage} onKeyDown={(e) => afterUpdate(e, "ProfileMessage")} spellcheck="false" />}
      </ProfileWrapper>
    </MyInfoWrapper>
  );
};

export default MyInfoPage;
