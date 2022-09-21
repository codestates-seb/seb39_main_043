import atoms from "../atoms";

const MypageSidebar = () => {
  return (
    <atoms.MypageSidebarContainer>
      <atoms.MypageSidebarNickname content={"appleBanana"} />
      <atoms.MypageSidebarItem content={"내 정보 수정"} />
      <atoms.MypageSidebarItem content={"캘린더 관리"} />
      <atoms.MypageSidebarLogout />
    </atoms.MypageSidebarContainer>
  );
};

export default MypageSidebar;
