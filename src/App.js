import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ItemDetail } from './components/ItemDetail';
import { ItemList } from './components/ItemList';

function App() {
  return (
    <div className="min-h-screen App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ItemList />} />
          <Route path='/details/:id' element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
