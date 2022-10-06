import { GiHamburgerMenu } from 'react-icons/gi';
import { useDispatch, useSelector } from 'react-redux';
import modalSlice from '../../slices/modalSlice';

const HamburgerIcon = ({ className }) => {
  const modalState = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const openCalendarSidebar = () => {
    dispatch(modalSlice.actions.modal({ ...modalState, calendarSidebarModal: !modalState.calendarSidebarModal }));
  };
  return <GiHamburgerMenu size={40} className={className} onClick={openCalendarSidebar} />;
};

export default HamburgerIcon;
