import { useEffect, useState } from "react"
import Navbar from "./components/Navbar"
import TradeCard from "./components/TradeCard"
import Modal from "./components/Modal"
import etherium from './assets/etherium.svg'
import solana from './assets/solana.svg'
import xrp from './assets/xrp.svg'
import matic from './assets/matic.svg'
import binance from './assets/binance.svg'
import bitcoin from './assets/bitcoin.svg'

function App() {
  const [tokens, setTokens] = useState([
    {
        id: 1,
        name: 'Ethereum',
        symbol: 'ETHUSDT',
        selected: true,
        img: etherium,
        hide: false
    },
    {
        id: 2,
        name: 'Bitcoin',
        symbol: 'BTCUSDT',
        selected: false,
        img: bitcoin,
        hide: false
    },
    {
        id: 3,
        name: 'Matic',
        symbol: 'MATICUSDT',
        selected: false,
        img: matic,
        hide: false
    },
    {
        id: 4,
        name: 'Binance',
        symbol: 'BNBUSDT',
        selected: false,
        img: binance,
        hide: false
    },
    {
        id: 5,
        name: 'XRP',
        symbol: 'XRPUSDT',
        selected: false,
        img: xrp,
        hide: false
    },
    {
        id: 6,
        name: 'Solana',
        symbol: 'SOLUSDT',
        selected: false,
        img: solana,
        hide: false
    },
])
  const [currentValues, setCurrentValues] = useState({
    val: 0,
    name: 'Ethereum',
    img: etherium,
    symbol: 'ETHUSDT'
  })
  const [isModalOpen, setIsModalOpen] = useState(false)
  const searchTokens = keys => {
    setTokens(prevTokens => prevTokens.map(token => {
      if(token.name.toLowerCase().includes(keys)) token.hide = false
      else token.hide = true
      return token
    }))
  }
  const updateIsModalOpen = val => {
    searchTokens('')
    setIsModalOpen(val)
  }
  function getCrypto(symbol){
    const socketUrl = 'wss://stream.binance.com:9443/ws/'+symbol.toLowerCase()+'@aggTrade'
    const ws = new WebSocket(socketUrl)
    ws.onmessage = e => {
      const data = JSON.parse(e.data)
      const {name, selected, img, symbol} = tokens.find(token => token.symbol === data.s)
      if(selected){
        setCurrentValues({
          val: parseFloat(data.p * 80).toFixed(2),
          name,
          img,
          symbol
        })
      }
    }
  }
  const updateToken = id => {
    const { symbol } = tokens.find(token => token.id === id)
    setTokens(prevTokens => prevTokens.map(token => {
      if(token.selected) token.selected = false
      if(token.id === id) token.selected = true
      return token
    }))
    getCrypto(symbol)
    updateIsModalOpen(false)
  }
  useEffect(() => {
    getCrypto('ETHUSDT')
  }, [])
  return (
    <div className="App">
      <Navbar/>
      <TradeCard 
        updateIsModalOpen={updateIsModalOpen} 
        currentValues={currentValues}
        />
      {isModalOpen && <Modal 
                        updateIsModalOpen={updateIsModalOpen} 
                        tokens={tokens}
                        updateToken={updateToken}
                        searchTokens={searchTokens}
                        />}
    </div>
  )
}

export default App
