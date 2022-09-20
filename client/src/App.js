import JoinForm from './components/molecules/JoinForm';
import LoginForm from './components/molecules/LoginForm';
import MyPageNavigation from './components/molecules/MyPageNavigation';
import MainPageNavigation from './components/molecules/MainPageNavigation';
import Calendar from './components/molecules/Calendar';

function App() {
  return (
    <>
      <LoginForm />
      <JoinForm />
      <MyPageNavigation />
      <MainPageNavigation year={2022} month={9} />
      <Calendar />
    </>
  );
}

export default App;
