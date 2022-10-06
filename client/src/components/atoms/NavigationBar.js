import styled from 'styled-components';

const NavigationBarWrapper = styled.div`
  width: 1280px;
  height: 50px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
`;

const NavigationBar = ({ children }) => {
  return <NavigationBarWrapper>{children}</NavigationBarWrapper>;
};

export default NavigationBar;
