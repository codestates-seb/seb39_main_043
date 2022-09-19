import styled from 'styled-components';

const JoinButtonWrapper = styled.div`
  width: 440px;
  height: 60px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  .join-text {
    font-size: 24px;
  }
`;

const JoinButton = () => {
  return (
    <JoinButtonWrapper>
      <span className="join-text">회원가입</span>
    </JoinButtonWrapper>
  );
};

export default JoinButton;
