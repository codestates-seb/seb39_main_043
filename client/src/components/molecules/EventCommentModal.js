import styled from "styled-components";
import atoms from "../atoms";
import ModalNavigationBar from "../atoms/ModalNavigationBar";

const EventCommentModalWrapper = styled.div``;

const StyledModalNavigationBar = styled(ModalNavigationBar)`
  width: 440px;
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
    background: #b30000;
  }
`;

const SytledUserProfile = styled(atoms.UserProfile)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

const StyledUserNickname = styled(atoms.UserNickname)`
  margin-right: 8px;
  font-weight: bold;
`;

const EventCommentModal = () => {
  return (
    <EventCommentModalWrapper>
      <StyledModalNavigationBar>
        <atoms.CloseIcon />
      </StyledModalNavigationBar>

      <atoms.CommentModalContainer>
        <CommentWrapper>
          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>

          <atoms.UserCommentContainer>
            <SytledUserProfile imgUrl={"https://random.imagecdn.app/500/150"} />
            <StyledUserNickname content={"red"} />
            <atoms.UserComment content={"1시에 보자"} />
          </atoms.UserCommentContainer>
        </CommentWrapper>

        <atoms.CommentInputContainer>
          <atoms.CommentTextarea />
          <atoms.CommentPutButton />
        </atoms.CommentInputContainer>
      </atoms.CommentModalContainer>
    </EventCommentModalWrapper>
  );
};

export default EventCommentModal;
