import styled from 'styled-components';
import atoms from '../atoms';
import { useSelector, useDispatch } from 'react-redux';
import dateSlice from '../../slices/dateSlice';

const HamburgerIcon = styled(atoms.HamburgerIcon)`
  margin-left: 14px;
`;

const LogoIcon = styled(atoms.LogoIcon)`
  margin-left: 31px;
`;

const PrevMonthIcon = styled(atoms.PrevMonthIcon)`
  margin-left: 420px;
`;

const CalendarIcon = styled(atoms.CalendarIcon)`
  margin-left: 275px;
`;

const CurrentCalendarTitle = styled(atoms.CurrentCalendarTitle)`
  margin-left: 8px;
`;

const UserProfile = styled(atoms.UserProfile)`
  margin-left: 14px;
`;

const MainPageNavigation = () => {
  const year = useSelector((state) => state.date.year);
  const month = useSelector((state) => state.date.month);
  const dispatch = useDispatch();

  return (
    <>
      <atoms.NavigationBar>
        <HamburgerIcon />
        <LogoIcon />
        <PrevMonthIcon onClick={() => (month === 1 ? dispatch(dateSlice.actions.changeDate({ year: year - 1, month: 12 })) : dispatch(dateSlice.actions.changeDate({ year: year, month: month - 1 })))} />
        <atoms.FocusMonth year={year} month={month} />
        <atoms.NextMonthIcon onClick={() => (month === 12 ? dispatch(dateSlice.actions.changeDate({ year: year + 1, month: 1 })) : dispatch(dateSlice.actions.changeDate({ year: year, month: month + 1 })))} />
        <CalendarIcon />
        <CurrentCalendarTitle />
        <UserProfile />
      </atoms.NavigationBar>
    </>
  );
};

export default MainPageNavigation;
