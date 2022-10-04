import { createGlobalStyle } from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';
import MyPage from './pages/MyPage';
import MyInfoPage from './pages/MyInfoPage';
import MyCalendarPage from './pages/MyCalendarPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: white
  }
  
  `;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/joinpage" element={<JoinPage />} />
        <Route path="/mypage/*" element={<MyPage />}>
          {/* <Route path="myinfopage" element={<MyInfoPage />} />
          <Route path="mycalendarpage" element={<MyCalendarPage />} /> */}
        </Route>
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
