import styled from "styled-components";
import { MdModeEditOutline } from "react-icons/md";

const UpdateProfileWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 180px;
  height: 180px;
  background-color: white;
  border: 1px solid black;
  border-radius: 50%;
  overflow: hidden;

  .hover-img {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0;
    transition: opacity 0.3s;
    cursor: pointer;
    z-index: 1;
  }

  .hover-img:hover {
    opacity: 0.5;
  }

  .update-button {
    outline: none;
    border: none;
    border-radius: 8px;
    padding: 8px;
  }
`;

const UpdateProfile = ({ className, onClick }) => {
  return (
    <UpdateProfileWrapper className={className}>
      <img src="https://random.imagecdn.app/500/150" />
      <span className="hover-img" onClick={onClick}>
        <button className="update-button">
          <MdModeEditOutline size={32} />
        </button>
      </span>
    </UpdateProfileWrapper>
  );
};

export default UpdateProfile;
