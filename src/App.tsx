import { useEffect, useState } from 'react';

import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.com/react-tours-project';
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const resopnse = await fetch(url);
      const data = await resopnse.json();
      setLoading(false);
      setTours(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const deleteTour = (id: string) => {
    const filteredTour = tours.filter((tour: any) => tour.id !== id);
    setTours(filteredTour);
  };
  return (
    <main>
      {loading && <Loading />}
      {tours.length === 0 && (
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => fetchTours()}>
            fetchTours
          </button>
        </div>
      )}
      <Tours tours={tours} deleteTour={deleteTour} />
    </main>
  );
}

export default App;
