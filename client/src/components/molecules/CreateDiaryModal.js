import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';
import atoms from '../atoms';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { useRef } from 'react';
// <--- styled component --->
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

const CreateDiaryButton = styled(atoms.CreateDiaryButton)`
  margin-top: 10px;
`;

const postDiary = async (scheduleId, memberId, contents, title, diaryImg) => {
  await axios
    .post(`${process.env.REACT_APP_API_URL}/diaries`, {
      scheduleId,
      memberId,
      contents,
      title,
      diaryImg,
    })
    .then((res) => {
      console.log('res.data : ', res.data);
      axios
        .patch(`${process.env.REACT_APP_API_URL}/schedules/${scheduleId}`, {
          diaryInfo: res.data.diaryId,
        })
        .then((res) => {
          console.log('complete', res.data);
        });
    });
};

// <--- DiaryModal --->
const CreateDiaryModal = ({ className }) => {
  const editorRef = useRef();
  const modalState = useSelector((state) => state.modal);
  const userState = useSelector((state) => state.user);
  const selectedState = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const diaryMutation = useMutation(() => postDiary(selectedState.scheduleId, userState.id, editorRef.current.getInstance().getMarkdown(), 'title', 'diaryImg'), {
    onSuccess: () => {
      queryClient.invalidateQueries('diary');
      queryClient.invalidateQueries('schedule');
      dispatch(modalSlice.actions.modal({}));
    },
  });

  return (
    <DiaryModalWrapper className={className}>
      {/*<--- 네비게이션바 --->*/}
      <atoms.DiaryNavigationBar>
        <UserWrapper>
          <StyledUserProfile />
          <atoms.UserNickname content={userState.name} />
        </UserWrapper>

        {/* <atoms.DiaryTitle content={'Diary'} /> */}

        <IconWrapper>
          {/* <atoms.UpdateIcon />
          <atoms.DeleteIcon /> */}
          <atoms.CloseIcon onClick={() => dispatch(modalSlice.actions.modal({ createDiaryModal: false }))} />
        </IconWrapper>
      </atoms.DiaryNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.DiaryModalContainer>
        {/* 회고 내용 */}
        <Editor height="600px" initialEditType="markdown" useCommandShortcut={false} ref={editorRef} />
        <CreateDiaryButton title={'등록'} onClick={diaryMutation.mutate} />
      </atoms.DiaryModalContainer>
    </DiaryModalWrapper>
  );
};

export default CreateDiaryModal;
