import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Welcome } from '../components/Welcome';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} >
            <Route index element={<Welcome/>}/>
            <Route path=':category' element={<Main />} />
            
        </Route>
        <Route path="*" element = {<h1>There is no result sorry</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
