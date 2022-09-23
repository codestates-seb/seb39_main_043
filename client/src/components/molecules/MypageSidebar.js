import atoms from "../atoms";
import { Link } from "react-router-dom";

const MypageSidebar = ({ className }) => {
  return (
    <atoms.MypageSidebarContainer className={className}>
      <atoms.MypageSidebarNickname content={"appleBanana"} />
      <Link to="/mypage/myinfopage">
        <atoms.MypageSidebarItem content={"내 정보 수정"} />
      </Link>

      <Link to="/mypage/mycalendarpage">
        <atoms.MypageSidebarItem content={"캘린더 관리"} />
      </Link>
      <atoms.MypageSidebarLogout />
    </atoms.MypageSidebarContainer>
  );
};

export default MypageSidebar;
