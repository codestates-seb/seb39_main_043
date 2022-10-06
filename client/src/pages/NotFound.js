import styled from "styled-components";
import img from "../asset/404Page.jpg";

const NotFoundWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: white;

  img {
    width: 80vw;
    height: 100vh;
  }
`;

const NotFound = () => {
  return (
    <NotFoundWrapper>
      <img src={img} alt="잘못된 페이지" />
    </NotFoundWrapper>
  );
};

export default NotFound;
