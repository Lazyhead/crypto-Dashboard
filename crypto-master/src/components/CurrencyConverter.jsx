import React from 'react';
import { useState } from 'react';
import Exchanger from './ExchangeRate';
import axios from 'axios';

const CurrencyConverter = () => {

  const currencies = ["BTC","ETH","USD","XRP","LTC","ADA"]
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
  const [amount, setAmount] = useState(1);
  // const [exchangeRate, setExchangeRate] = useState(0);
  const [result, setResult] = useState(0);
  // const [primaryCurrencyExchanged,setPrimaryCurrencyExcanged] = useState('BTC');
  // const [secondaryCurrencyExchanged,setSecondaryCurrencyExcanged] = useState('BTC');

  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: 'BTC',
    secondaryCurrency: 'BTC',
    exchangeRate: 0
  })


  console.log(exchangedData)

  const convert = () => {

    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
      //setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
      setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount);
      // setPrimaryCurrencyExcanged(chosenPrimaryCurrency);
      // setSecondaryCurrencyExcanged(chosenSecondaryCurrency);
      setExchangedData({
        primaryCurrency: chosenPrimaryCurrency,
        secondaryCurrency: chosenSecondaryCurrency,
        exchangeRate: (response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])

      })
    }).catch(function (error) {
      console.error(error);
    });

    
  }



  
  return (
    <div className="currency-Converter">
        <h2>Currency-Converter</h2>  

        <div className="input-values">
{/*choose a currency to convert it*/}
        <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input 
                type="number"
                name="currency-amount-1"
                value={amount}
                onChange = {(e) => setAmount(e.target.value)}
                 />
              </td>
              <td>
                <select 
                value ={chosenPrimaryCurrency}
                name="currency-option-1"
                className="currency-option"
                onChange={(e) => setChosenPrimaryCurrency (e.target.value) }
                >
                  {currencies.map( (currency, _index )=> (<option key={_index} >{currency}</option>))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
{/* choose the currency to which we want to convert */}
        <table>
          <body>
            <tr>
              <td>Secondary Currency</td>
              <td>
                <input 
                name="currency-amount-2"
                value={result}
                disabled = {true}
                 />
              </td>
              <td>
                <select 
                value ={chosenSecondaryCurrency}
                name="currency-option-2"
                className="currency-option"
                onChange={(e) => setChosenSecondaryCurrency (e.target.value) }
                >
                  {currencies.map( (currency, _index )=> (<option key={_index} >{currency}</option>))}
                </select>
              </td>
            </tr>
          </body>
        </table>

        <button id="convert-btn" onClick={convert}>Convert</button>

        </div>

        <Exchanger
        exchangedData = {exchangedData}
        
        />
    </div>
  )
}

export default CurrencyConverter