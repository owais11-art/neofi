import { useState } from 'react'
import downArr  from '../assets/down-arr.svg'
const TradeCard = ({updateIsModalOpen, currentValues}) => {
    const [estimatePrice, setEstimatePrice] = useState(0)
    const handleInput = e => {
        const investiment = parseFloat(e.target.value)
        const estimate = investiment / currentValues.val
        setEstimatePrice(estimate)
    }
    return (
        <main>
            <div className="trade-card">
                <div className="token-logo">
                    <img src={currentValues.img} alt="token-image" />
                </div>
                <div className="current-info">
                    <div className="current-val-label">Current value</div>
                    <div className="value">₹ {currentValues.val}</div>
                </div>
                <div className="currency" onClick={() => updateIsModalOpen(true)}>
                    <div className="currency-name">
                        <div className="logo">
                            <img src={currentValues.img} alt="logo" />
                        </div>
                        <div className="name">
                            {currentValues.name}
                        </div>
                    </div>
                    <div className="down-arrow">
                        <img src={downArr} alt="down-arrow" />
                    </div>
                </div>
                <div className="investment">
                    <div className="label">
                        Amount you want to invest
                    </div>
                    <div className="investment-input">
                        <input type="text" placeholder='0.00' onInput={handleInput}/>
                        <p>INR</p>
                    </div>
                </div>
                <div className="estimation">
                    <div className="label">
                        Estimate Number of {currentValues.symbol.slice(0, -4)} You will Get
                    </div>
                    <div className="estimation-output">
                        <input type="text" value={estimatePrice ? estimatePrice : ''} placeholder='0.00' disabled/>
                    </div>
                </div>
                <div className="button buy-btn">
                    <button>Buy</button>
                </div>
            </div>
        </main>
    )
}

export default TradeCard