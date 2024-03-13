import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Main from './components/main/Main';
import Header from './components/header/Header';


function App() {
  return (
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="news" element/>
            <Route path="laws" element/>
            <Route path="forum" element/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
