import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Header from './components/header/Header';
import PersonalPage from './components/PersonalPage';
import InProgress from './components/InProgress';


function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="personalPage" element={<PersonalPage />}/>
            <Route path="inProgress" element={<InProgress />}/>
            <Route path="forum" element/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
