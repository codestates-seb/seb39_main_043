import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import modalSlice from '../../slices/modalSlice';
import atoms from '../atoms';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import axios from 'axios';
import { useMutation, useQueryClient, useQuery } from 'react-query';
import { useRef } from 'react';
import selectedSlice from '../../slices/selectedSlice';
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

const getDiary = async (diaryId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/diaries/${diaryId}`);
  return data;
};

// <--- DiaryModal --->
const UpdateDiaryModal = ({ className }) => {
  const editorRef = useRef();
  const modalState = useSelector((state) => state.modal);
  const userState = useSelector((state) => state.user);
  const selectedState = useSelector((state) => state.selected);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const updateDiary = async (diaryId, contents) => {
    await axios.patch(`${process.env.REACT_APP_API_URL}/diaries/${diaryId}`, {
      contents,
    });
  };
  const diaryUpdateMutation = useMutation(() => updateDiary(selectedState.diaryId, editorRef.current.getInstance().getMarkdown()), {
    onSuccess: () => {
      // queryClient.invalidateQueries('diary');
      queryClient.invalidateQueries('schedule');
      queryClient.invalidateQueries(['diary', selectedState.diaryId]);
      dispatch(modalSlice.actions.modal({ updateDiaryModal: false, eventModal: true }));
    },
  });
  const diary = useQuery(['diary', selectedState.diaryId], () => getDiary(selectedState.diaryId));
  if (diary.isLoading) return <h3>Loading...</h3>;
  if (diary.isError)
    return (
      <>
        <h3>error</h3>
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
        <Editor height="300px" initialEditType="markdown" useCommandShortcut={false} ref={editorRef} initialValue={diary.data.contents} />
        <CreateDiaryButton title={'수정'} onClick={diaryUpdateMutation.mutate} />
      </atoms.DiaryModalContainer>
    </DiaryModalWrapper>
  );
};

export default UpdateDiaryModal;
