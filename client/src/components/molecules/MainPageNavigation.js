import styled from "styled-components";
import atoms from "../atoms";
import { useSelector, useDispatch } from "react-redux";
import dateSlice from "../../slices/dateSlice";

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

const MainPageNavigation = ({ onClick }) => {
  const year = useSelector((state) => state.date.year);
  const month = useSelector((state) => state.date.month);
  const dispatch = useDispatch();
  // const dateHandler = (year, month, change) => {
  //   if (change === 'plus') {
  //     if (month === 12) return dispatch(dateSlice.actions.changeDate({ year: year + 1, month: 1 }));
  //     else return dispatch(dateSlice.actions.changeDate({ year: year, month: month + 1 }));
  //   } else {
  //     if (month === 1) return dispatch(dateSlice.actions.changeDate({ year: year - 1, month: 12 }));
  //     else return dispatch(dateSlice.actions.changeDate({ year: year, month: month - 1 }));
  //   }
  // };

  return (
    <>
      <atoms.NavigationBar>
        <HamburgerIcon onClick={() => onClick("CalendarSidebar")} />
        <LogoIcon />
        <PrevMonthIcon onClick={() => (month === 1 ? dispatch(dateSlice.actions.changeDate({ year: year - 1, month: 12 })) : dispatch(dateSlice.actions.changeDate({ year: year, month: month - 1 })))} />
        <atoms.FocusMonth year={year} month={month} />
        <atoms.NextMonthIcon onClick={() => (month === 12 ? dispatch(dateSlice.actions.changeDate({ year: year + 1, month: 1 })) : dispatch(dateSlice.actions.changeDate({ year: year, month: month + 1 })))} />
        <CalendarIcon />
        <CurrentCalendarTitle />
        <UserProfile onClick={() => onClick("MypageSidebarModal")} />
      </atoms.NavigationBar>
    </>
  );
};

export default MainPageNavigation;
