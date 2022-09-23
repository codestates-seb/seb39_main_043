import styled from "styled-components";
import atoms from "../atoms";

const HamburgerIcon = styled(atoms.HamburgerIcon)`
  margin-left: 14px;
`;

const LogoIcon = styled(atoms.LogoIcon)`
  margin-left: 31px;
`;

const MyPageText = styled(atoms.MyPageText)`
  margin-left: 422px;
`;

const CalendarIcon = styled(atoms.CalendarIcon)`
  margin-left: 380px;
`;

const CurrentCalendarTitle = styled(atoms.CurrentCalendarTitle)`
  margin-left: 8px;
`;

const UserProfile = styled(atoms.UserProfile)`
  margin-left: 14px;
`;
const MyPageNavigation = ({ onClick }) => {
  return (
    <>
      <atoms.NavigationBar>
        <HamburgerIcon onClick={() => onClick("CalendarSidebarModal")} />
        <LogoIcon />
        <MyPageText />
        <CalendarIcon />
        <CurrentCalendarTitle />
        <UserProfile onClick={() => onClick("MypageSidebarModal")} />
      </atoms.NavigationBar>
    </>
  );
};

export default MyPageNavigation;
