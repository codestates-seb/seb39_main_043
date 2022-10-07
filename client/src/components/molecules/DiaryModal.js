import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';
import atoms from '../atoms';
import { Viewer } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { useQuery, useQueryClient, useMutation } from 'react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';
import inputSlice from '../../slices/inputSlice';

// <--- styled component --->
const DiaryModalWrapper = styled.div`
  .viewer-container {
    height: 300px;
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

const deleteDiary = async (diaryId, scheduleId) => {
  await axios.delete(`${process.env.REACT_APP_API_URL}/diaries/${diaryId}`).then((res) => {
    axios.patch(`${process.env.REACT_APP_API_URL}/schedules/${scheduleId}`, { diaryInfo: 0 }).then((res) => {
      console.log('patch schedule', res.data);
    });
  });
};

const getDiaryComment = async (diaryId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/diarycomments/${diaryId}`);
  return data;
};

const postDiaryComment = async (comment, diaryId, memberId) => {
  await axios.post(`${process.env.REACT_APP_API_URL}/diarycomments`, {
    diaryId,
    memberId,
    contents: comment,
  });
};

// <--- DiaryModal --->
const DiaryModal = ({ className }) => {
  const modalState = useSelector((state) => state.modal);
  const userState = useSelector((state) => state.user);
  const selectedState = useSelector((state) => state.selected);
  const inputState = useSelector((state) => state.input);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const diary = useQuery(['diary', selectedState.diaryId], () => getDiary(selectedState.diaryId));
  const diaryComment = useQuery(['diaryComment', selectedState.diaryId], () => getDiaryComment(selectedState.diaryId));
  const deleteDiaryMutation = useMutation(() => deleteDiary(selectedState.diaryId, selectedState.scheduleId), {
    onSuccess: () => {
      queryClient.invalidateQueries(['diary', selectedState.diaryId]);
      queryClient.invalidateQueries('schedule');
      dispatch(modalSlice.actions.modal({ ...modalState, diaryModal: false }));
    },
  });
  const postDiaryCommentMutation = useMutation(() => postDiaryComment(inputState.comment, selectedState.diaryId, userState.id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['diaryComment', selectedState.diaryId]);
      dispatch(inputSlice.actions.input({ ...inputState, comment: '' }));
    },
  });
  const deleteDiaryHandler = () => {
    let result = window.confirm('기록을 삭제하시겠습니까?');
    if (result) {
      deleteDiaryMutation.mutate();
      alert('기록이 삭제되었습니다');
    } else {
      alert('기록 삭제가 취소되었습니다');
    }
  };
  if (diary.isLoading) return <h3>Loading...</h3>;
  if (diary.isError)
    return (
      <>
        <h3>error</h3>
      </>
    );
  if (diaryComment.isLoading) return <h3>Loading...</h3>;
  if (diaryComment.isError)
    return (
      <>
        <h3>diaryComment error</h3>
        <p>{diaryComment.error.toString()}</p>
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
          <atoms.UpdateIcon onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, updateDiaryModal: true, diaryModal: false }))} />
          <atoms.DeleteIcon onClick={deleteDiaryHandler} />
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
          <atoms.CommentPutButton
            onClick={() => {
              postDiaryCommentMutation.mutate();
              document.getElementById('comment-textarea').value = '';
            }}
          />
        </StyledCommentInputContainer>

        {/* 댓글 영역 */}
        <div className={'comment-container'}>
          {diaryComment.data.map((comment) => {
            return (
              <atoms.UserCommentContainer key={comment.diaryCommentId}>
                <UserWrapper>
                  <atoms.UserNickname content={comment.name} />
                </UserWrapper>

                <StyledUserComment content={comment.contents} />
              </atoms.UserCommentContainer>
            );
          })}
        </div>
      </atoms.DiaryModalContainer>
    </DiaryModalWrapper>
  );
};

export default DiaryModal;
