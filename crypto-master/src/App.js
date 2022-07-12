import NewsFeed from './components/NewsFeed';
import CurrencyConverter from './components/CurrencyConverter';
import CoinList from './components/CoinList';

function App() {
  return (
    <div className='home' >
      <div className="app">      
      <CurrencyConverter/>  
      <NewsFeed/>
    </div>
    <div className='coin-list'>
      <CoinList/>
    </div>

    </div>    

  );
}

export default App;
