import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';
import atoms from '../atoms';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useQuery, useQueryClient } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';

// <--- styled component --->
const DiaryModalWrapper = styled.div`
  .viewer-container {
    height: 500px;
    width: 800px;
    overflow-y: scroll;
    padding: 5px;
  }

  .comment-container {
    height: 100px;
    width: 800px;
    border: 1px solid #b6b6b6;
    overflow-y: scroll;
  }
`;

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

const getDiary = async (diaryId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/diaries/${diaryId}`);
  return data;
};

// <--- DiaryModal --->
const DiaryModal = ({ className }) => {
  // 테스트 데이터
  const dummyData = {
    item: [
      { id: 0, nickName: 'red', content: '댓글 1입니다.' },
      { id: 1, nickName: 'orange', content: '댓글 2입니다.' },
      { id: 2, nickName: 'banana', content: '댓글 3입니다.' },
      { id: 3, nickName: 'green', content: '댓글 4입니다.' },
      { id: 4, nickName: 'blue', content: '댓글 5입니다.' },
      { id: 5, nickName: 'purple', content: '댓글 6입니다.' },
    ],
  };
  const modalState = useSelector((state) => state.modal);
  const userState = useSelector((state) => state.user);
  const selectedState = useSelector((state) => state.selected);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  queryClient.invalidateQueries('diary');
  const diary = useQuery('diary', () => getDiary(selectedState.diaryId));

  if (diary.isLoading) return <h3>Loading...</h3>;
  if (diary.isError)
    return (
      <>
        <h3>diary error</h3>
        <p>{diary.error.toString()}</p>
      </>
    );
  return (
    <DiaryModalWrapper className={className}>
      {/*<--- 네비게이션바 --->*/}
      <atoms.DiaryNavigationBar>
        <UserWrapper>
          <StyledUserProfile />
          <atoms.UserNickname content={userState.name} />
        </UserWrapper>

        {/* <atoms.DiaryTitle content={'회고 제목'} /> */}

        <IconWrapper>
          <atoms.UpdateIcon />
          <atoms.DeleteIcon />
          <atoms.CloseIcon onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, diaryModal: false }))} />
        </IconWrapper>
      </atoms.DiaryNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.DiaryModalContainer>
        {/* 회고 내용 */}
        {/* <atoms.DiaryContentContainer content={'재밌'} /> */}
        <div className={'viewer-container'}>
          <Viewer initialValue={diary.data.contents} />
        </div>

        {/* 댓글 입력창 */}
        <StyledCommentInputContainer>
          <atoms.CommentTextarea />
          <atoms.CommentPutButton />
        </StyledCommentInputContainer>

        {/* 댓글 영역 */}
        <div className={'comment-container'}>
          {dummyData.item.map((value) => {
            return (
              <atoms.UserCommentContainer key={value.id}>
                <UserWrapper>
                  <atoms.UserNickname content={value.nickName} />
                </UserWrapper>

                <StyledUserComment content={value.content} />
              </atoms.UserCommentContainer>
            );
          })}
        </div>
      </atoms.DiaryModalContainer>
    </DiaryModalWrapper>
  );
};

export default DiaryModal;
