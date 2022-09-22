import styled from "styled-components";
import atoms from "../atoms";

// <--- styled component --->
const EventCommentModalWrapper = styled.div`
  background-color: white;
`;

const CommentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 430px;
  overflow-y: scroll;
  margin-bottom: 16px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f5f5f5;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: gray;
  }
`;

const StyledUserNickname = styled(atoms.UserNickname)`
  margin-right: 8px;
  font-weight: bold;
`;

// <-- EventCommentModal -->
const EventCommentModal = ({ className, onClick }) => {
  // 테스트 데이터
  const dummyData = {
    item: [
      { id: 1, nickName: "red", content: "1시에 보자" },
      { id: 2, nickName: "blue", content: "ABCD" },
      { id: 3, nickName: "yellow", content: "12시에 보자" },
      { id: 4, nickName: "black", content: "DEFG" },
      { id: 5, nickName: "white", content: "31시에 보자" },
      { id: 6, nickName: "beige", content: "1444시에 보자" },
      { id: 7, nickName: "brown", content: "112312시에 보자" },
      { id: 8, nickName: "pink", content: "2453451시에 보자" },
      { id: 9, nickName: "purple", content: "DEFG" },
      { id: 10, nickName: "skyblue", content: "31시에 보자" },
      { id: 11, nickName: "green", content: "1444시에 보자" },
      { id: 12, nickName: "orange", content: "112312시에 보자" },
      { id: 13, nickName: "pink", content: "2453451시에 보자" },
    ],
  };

  return (
    // <--- 네비게이션바 --->
    <EventCommentModalWrapper className={className}>
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon onClick={onClick} />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.CommentModalContainer>
        {/* 일정 댓글 영역 */}
        <CommentWrapper>
          {dummyData.item.map((value) => {
            return (
              <atoms.UserCommentContainer key={value.id}>
                <StyledUserNickname content={value.nickName} />
                <atoms.UserComment content={value.content} />
              </atoms.UserCommentContainer>
            );
          })}
        </CommentWrapper>

        {/* 댓글창 */}
        <atoms.CommentInputContainer>
          <atoms.CommentTextarea />
          <atoms.CommentPutButton />
        </atoms.CommentInputContainer>
      </atoms.CommentModalContainer>
    </EventCommentModalWrapper>
  );
};

export default EventCommentModal;
