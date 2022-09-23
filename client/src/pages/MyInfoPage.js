import styled from "styled-components";
import atoms from "../components/atoms";

const MyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

const MyInfoPage = () => {
  return (
    <MyInfoWrapper>
      <MypageItem content="프로필정보" />
      <UpdateProfile />

      <ProfileWrapper>
        <atoms.ProfileName className="profile-name" content={"apple"} />
        <atoms.UpdateIcon />
      </ProfileWrapper>

      <ProfileWrapper>
        <atoms.ProfileMessage className="profile-name" content={"abcdefabcdefabcdef"} />
        <atoms.UpdateIcon />
      </ProfileWrapper>
    </MyInfoWrapper>
  );
};

export default MyInfoPage;
