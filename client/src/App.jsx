import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Watchlist from './pages/Watchlist';
import Footer from './components/Footer';
import { getWatchlist } from './services/api';

function App() {
    const [watchlist, setWatchlist] = useState([]);
    const [watchlistError, setWatchlistError] = useState('');

      useEffect(() => {
        async function loadWatchlist() {
          try {
            const data = await getWatchlist();
            setWatchlist(data);
          } catch (err) {
            console.error('Failed to load watchlist', err);
            setWatchlistError('Failed to load watchlist.');
          }
        }

    loadWatchlist();
  }, []);
  
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies"element={
        <Movies
          watchlist={watchlist}
          setWatchlist={setWatchlist}
         />
        }
      />
        <Route path="/watchlist" element={
        <Watchlist
          watchlist={watchlist}
          setWatchlist={setWatchlist}
          watchlistError={watchlistError}
          />
        }
      />
        <Route path="*" element={<h1>404 Page Not Found</h1>} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;