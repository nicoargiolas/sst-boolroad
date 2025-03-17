// Importazione pagine
import HomePage from './pages/HomePage';
// import TripPage from './pages/TripPage';
// import AddTripPage from './pages/AddTripPage';

// Importazione layout
import DefaultLayout from './layouts/DeafultLayout';

// Importazione parte di gestione rotte
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// CSS
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage />} />
          {/* <Route index path="/trip/:id" element={<TripPage />} />
          <Route index path="/trip/add" element={<AddTripPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
