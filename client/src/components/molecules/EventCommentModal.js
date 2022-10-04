import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import inputSlice from '../../slices/inputSlice';
import modalSlice from '../../slices/modalSlice';
import atoms from '../atoms';

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

const getComments = async (scheduleId) => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/schedulecomments/${scheduleId}`);
  return data;
};

const postComment = async (comment, scheduleId, memberId) => {
  await axios.post(`${process.env.REACT_APP_API_URL}/schedulecomments`, {
    scheduleId,
    memberId,
    contents: comment,
  });
};

// <-- EventCommentModal -->
const EventCommentModal = ({ className }) => {
  const localUser = JSON.parse(window.localStorage.getItem('user'));
  const modalState = useSelector((state) => state.modal);
  const scheduleId = useSelector((state) => state.selected.scheduleId);
  const inputState = useSelector((state) => state.input);
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const comments = useQuery('comments', () => getComments(scheduleId));
  const postCommentMutation = useMutation(() => postComment(inputState.comment, scheduleId, localUser.memberId), {
    onSuccess: () => {
      queryClient.invalidateQueries('comments');
      dispatch(inputSlice.actions.input({ ...inputState, comment: '' }));
    },
  });
  if (comments.isLoading) return <h3>comments Loading...</h3>;
  if (comments.isError)
    return (
      <>
        <h3>comments Error</h3>
        <p>{comments.error.toString()}</p>
      </>
    );

  // 테스트 데이터
  // const dummyData = {
  //   item: [
  //     { id: 1, nickName: 'red', content: '1시에 보자' },
  //     { id: 2, nickName: 'blue', content: 'ABCD' },
  //     { id: 3, nickName: 'yellow', content: '12시에 보자' },
  //     { id: 4, nickName: 'black', content: 'DEFG' },
  //     { id: 5, nickName: 'white', content: '31시에 보자' },
  //     { id: 6, nickName: 'beige', content: '1444시에 보자' },
  //     { id: 7, nickName: 'brown', content: '112312시에 보자' },
  //     { id: 8, nickName: 'pink', content: '2453451시에 보자' },
  //     { id: 9, nickName: 'purple', content: 'DEFG' },
  //     { id: 10, nickName: 'skyblue', content: '31시에 보자' },
  //     { id: 11, nickName: 'green', content: '1444시에 보자' },
  //     { id: 12, nickName: 'orange', content: '112312시에 보자' },
  //     { id: 13, nickName: 'pink', content: '2453451시에 보자' },
  //   ],
  // };

  return (
    // <--- 네비게이션바 --->
    <EventCommentModalWrapper className={className}>
      <atoms.ModalNavigationBar>
        <atoms.CloseIcon onClick={() => dispatch(modalSlice.actions.modal({ ...modalState, eventCommentModal: false }))} />
      </atoms.ModalNavigationBar>

      {/*<--- 컨테이너 --->*/}
      <atoms.CommentModalContainer>
        {/* 일정 댓글 영역 */}
        <CommentWrapper>
          {comments.data.map((value) => {
            return (
              <atoms.UserCommentContainer key={value.scheduleCommentId}>
                <StyledUserNickname content={value.name} />
                <atoms.UserComment content={value.contents} />
              </atoms.UserCommentContainer>
            );
          })}
        </CommentWrapper>

        {/* 댓글창 */}
        <atoms.CommentInputContainer>
          <atoms.CommentTextarea />
          <atoms.CommentPutButton onClick={postCommentMutation.mutate} />
        </atoms.CommentInputContainer>
      </atoms.CommentModalContainer>
    </EventCommentModalWrapper>
  );
};

export default EventCommentModal;
