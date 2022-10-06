import styled from "styled-components";
import { IoMdWarning } from "react-icons/io";

const WarningBoxWrapper = styled.div`
  display: flex;
  width: 440px;
  color: red;
  font-size: 14px;

  .value {
    margin-left: 8px;
  }

  &.hidden {
    visibility: hidden;
  }
`;

const WarningBox = ({ className, value }) => {
  return (
    <WarningBoxWrapper className={className}>
      <div>
        <IoMdWarning size={14} />
      </div>

      <pre className="value">{value}</pre>
    </WarningBoxWrapper>
  );
};

export default WarningBox;
