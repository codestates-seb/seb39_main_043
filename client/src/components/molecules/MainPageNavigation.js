import styled from 'styled-components';
import atoms from '../atoms';

const HamburgerIcon = styled(atoms.HamburgerIcon)`
  margin-left: 14px;
`;

const LogoIcon = styled(atoms.LogoIcon)`
  margin-left: 31px;
`;

const PrevMonthIcon = styled(atoms.PrevMonthIcon)`
  margin-left: 390px;
`;

const CalendarIcon = styled(atoms.CalendarIcon)`
  margin-left: 343px;
`;

const CurrentCalendarTitle = styled(atoms.CurrentCalendarTitle)`
  margin-left: 8px;
`;

const UserProfile = styled(atoms.UserProfile)`
  margin-left: 14px;
`;
const MainPageNavigation = ({ year, month }) => {
  return (
    <>
      <atoms.NavigationBar>
        <HamburgerIcon />
        <LogoIcon />
        <PrevMonthIcon />
        <atoms.FocusMonth year={year} month={month} />
        <atoms.NextMonthIcon />
        <CalendarIcon />
        <CurrentCalendarTitle />
        <UserProfile />
      </atoms.NavigationBar>
    </>
  );
};

export default MainPageNavigation;
