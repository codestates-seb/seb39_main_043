import { GiHamburgerMenu } from "react-icons/gi";

const HamburgerIcon = ({ className, onClick }) => {
  return <GiHamburgerMenu size={40} className={className} onClick={onClick} />;
};

export default HamburgerIcon;
