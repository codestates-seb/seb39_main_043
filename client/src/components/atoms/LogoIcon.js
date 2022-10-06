import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoIconWrapper = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-icon {
    text-align: center;
    line-height: 1;
    color: black;
  }
`;

const LogoIcon = ({ className }) => {
  return (
    <LogoIconWrapper className={className}>
      <Link to={'/mainpage'}>
        <div className="logo-icon">
          Social
          <br />
          Calendar
        </div>
      </Link>
    </LogoIconWrapper>
  );
};

export default LogoIcon;
