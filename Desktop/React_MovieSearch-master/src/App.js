import './App.css';
import SearchMovies from './components/SearchMovies'
import Header from './ui/Header'
import Footer from './ui/Footer'

function App() {
  return (
    <>
    <Header/>
    <div className="App">
      <h1 className="title">The Shoppies 🍿</h1>
      <SearchMovies/>
    </div>
    <Footer/>
    </>
  );
}

export default App;
