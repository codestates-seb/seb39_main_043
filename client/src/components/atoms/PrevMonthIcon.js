import { IoIosArrowBack } from 'react-icons/io';

const PrevMonthIcon = ({ className, onClick }) => {
  return <IoIosArrowBack size={24} className={className} onClick={onClick} />;
};

export default PrevMonthIcon;
