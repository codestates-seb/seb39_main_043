import atoms from "../atoms";

const MypageSidebar = ({ className }) => {
  return (
    <atoms.MypageSidebarContainer className={className}>
      <atoms.MypageSidebarNickname content={"appleBanana"} />
      <atoms.MypageSidebarItem content={"내 정보 수정"} />
      <atoms.MypageSidebarItem content={"캘린더 관리"} />
      <atoms.MypageSidebarLogout />
    </atoms.MypageSidebarContainer>
  );
};

export default MypageSidebar;
