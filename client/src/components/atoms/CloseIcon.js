import { MdClose } from "react-icons/md";

const CloseIcon = ({ id, onClick }) => {
  return (
    <span>
      <MdClose id={id} onClick={onClick} size={20} />
    </span>
  );
};

export default CloseIcon;
