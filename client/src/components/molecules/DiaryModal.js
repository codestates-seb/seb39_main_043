import styled from "styled-components";
import atoms from "../atoms";

const DiaryModalWrapper = styled.div``;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
  }
`;

const StyledUserProfile = styled(atoms.UserProfile)`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

const IconWrapper = styled.div`
  span {
    margin-left: 16px;
  }
`;

const StyledCommentInputContainer = styled(atoms.CommentInputContainer)`
  width: 100%;
  margin-top: 32px;
  margin-bottom: 16px;
`;

const StyledUserComment = styled(atoms.UserComment)`
  margin-left: 16px;
`;

const DiaryModal = () => {
  return (
    <DiaryModalWrapper>
      <atoms.DiaryNavigationBar>
        <UserWrapper>
          <StyledUserProfile />
          <atoms.UserNickname content={"skyblue"} />
        </UserWrapper>

        <atoms.DiaryTitle content={"회고 제목"} />

        <IconWrapper>
          <atoms.UpdateIcon />
          <atoms.DeleteIcon />
          <atoms.CloseIcon />
        </IconWrapper>
      </atoms.DiaryNavigationBar>

      <atoms.DiaryModalContainer>
        <atoms.DiaryContentContainer content={"재밌"} />

        <StyledCommentInputContainer>
          <atoms.CommentTextarea />
          <atoms.CommentPutButton />
        </StyledCommentInputContainer>

        <atoms.UserCommentContainer>
          <UserWrapper>
            <StyledUserProfile />
            <atoms.UserNickname content={"red"} />
          </UserWrapper>

          <StyledUserComment content={"댓글내용"} />
        </atoms.UserCommentContainer>
      </atoms.DiaryModalContainer>
    </DiaryModalWrapper>
  );
};

export default DiaryModal;
