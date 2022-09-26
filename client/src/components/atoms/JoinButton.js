import styled from 'styled-components';

const JoinButtonWrapper = styled.div`
  width: 440px;
  height: 60px;
  border-radius: 10px;
  background-color: #db9000;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  .join-text {
    font-size: 24px;
  }
`;

const JoinButton = ({ className, onClick }) => {
  return (
    <JoinButtonWrapper className={className} onClick={onClick}>
      <span className="join-text">회원가입</span>
    </JoinButtonWrapper>
  );
};

export default JoinButton;
