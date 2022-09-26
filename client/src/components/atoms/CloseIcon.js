import { MdClose } from "react-icons/md";

const CloseIcon = ({ id, onClick }) => {
  return <MdClose id={id} onClick={onClick} size={20} />;
};

export default CloseIcon;
