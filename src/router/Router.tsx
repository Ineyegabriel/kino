import { FunctionComponent } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetails from '@/pages/MovieDetails/MovieDetails';
import History from '@/pages/History/HistoryPage';
import NavBar from '@/components/NavBar/NavBar';

const Router: FunctionComponent = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/movie/:movieID" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default Router;
