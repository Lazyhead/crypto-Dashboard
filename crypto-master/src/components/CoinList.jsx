import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import Coin from './coin';


const CoinList = () => {
    const [listOfCoins, setListOfCoins] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    // const [activeMenu, setActiveMenu] = useState(true);
    // const [ screenSize, setScreenSize] = useState(null);

    // useEffect(() => {
    //     const handleResize = () => setScreenSize(window.innerWidth);

    //     window.addEventListener("resize", handleResize);

    //     handleResize();

    //     return () => window.removeEventListener("resize", handleResize);

    // }, []);

    // useEffect(() => {
    //     if(screenSize< 789)
    //     {
    //         setActiveMenu(false);
    //     }
    //     else{
    //         setActiveMenu(true);
    //     }

    // },[screenSize]);
    
    useEffect(() => {
        axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
        (response) => {
            setListOfCoins(response.data.coins);
        }
        );
        
    }, []);

    const filteredCoins = listOfCoins.filter((coin) => {
        return coin.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    return (
        <div className="App">
            <div className="cryptoHeader">
            <input
            type="text"
            placeholder="Search coins"
            onChange={(event) => {
                setSearchWord(event.target.value);
            
            }}
            />
            {/* <button className='searchBar' onClick={() => setActiveMenu(true)} ></button> */}
        </div>
        
        <div className="cryptoDisplay">
            {filteredCoins.map((coin) => {
            return (
                <Coin
                name={coin.name}
                icon={coin.icon}
                price={coin.price}
                symbol={coin.symbol}
                />
            );
            })}
        </div>
        </div>
    );
}


export default CoinList