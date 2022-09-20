import styled from 'styled-components';

const MyPageTextWrapper = styled.div`
  font-size: 24px;
`;

const MyPageText = ({ className }) => {
  return <MyPageTextWrapper className={className}>마이페이지</MyPageTextWrapper>;
};

export default MyPageText;
