import styled from 'styled-components';
import atoms from '../atoms';

const JoinFormWrapper = styled.div``;

const JoinForm = ({ className }) => {
  return (
    <JoinFormWrapper className={className}>
      <atoms.InputJoinNickname>{/* <atoms.WarningBox className={''} value={'이미 존재하는 별명입니다.'} /> */}</atoms.InputJoinNickname>
      <atoms.InputJoinId>
        <atoms.WarningBox className={''} value={'5~12자의 영문, 숫자로된 이메일 형태로 작성해주세요'} />
      </atoms.InputJoinId>
      <atoms.InputJoinPassword>
        <atoms.WarningBox className={''} value={'8~16자의 영문 대 소문자, 숫자, 특수기호를 사용하세요'} />
      </atoms.InputJoinPassword>
    </JoinFormWrapper>
  );
};

export default JoinForm;
