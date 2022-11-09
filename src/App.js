// import logo from './logo.svg';
import './App.css';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';


const App = () => {
  return (
    <>
    <main>
      <div className='banner'>
        <Banner/>
      </div>

      <Products/>

    </main>

    </>
  );
}

export default App;

