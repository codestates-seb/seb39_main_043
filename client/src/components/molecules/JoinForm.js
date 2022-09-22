import styled from "styled-components";
import atoms from "../atoms";

const JoinFormWrapper = styled.div``;

const JoinForm = ({ className }) => {
  return (
    <JoinFormWrapper className={className}>
      <atoms.InputJoinNickname />
      <atoms.InputJoinId />
      <atoms.InputJoinPassword />
    </JoinFormWrapper>
  );
};

export default JoinForm;
