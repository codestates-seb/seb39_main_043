import { useState } from "react";
import styled from "styled-components";
import atoms from "../atoms";

// <--- styled component --->
const CreateCalendarModalWrapper = styled.div``;

// <--- CreateCalendarModal --->
const CreateCalendarModal = () => {
  const [inputValue, setInputValue] = useState(""); // 추후 서버에 전송할 캘린더명

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <CreateCalendarModalWrapper>
      {/*<--- 네비게이션 바 ---> */}
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.ModalContentContainer>
        <atoms.InputTitle placeholder={"캘린더 이름을 입력하세요"} onChange={handleChange} />

        {/* 캘린더 생성 버튼 */}
        <atoms.ModalButton color={"#007FDB"} value="생성" />
      </atoms.ModalContentContainer>
    </CreateCalendarModalWrapper>
  );
};

export default CreateCalendarModal;
