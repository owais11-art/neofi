import search from '../assets/search.svg'
import check from '../assets/check.svg'
import cancel from '../assets/cancel.svg'
const Modal = ({updateIsModalOpen, tokens, updateToken, searchTokens}) => {
    return (
        <div className="overlay">
            <div className="currencies-list">
                <div className="cancel" onClick={() => updateIsModalOpen(false)}>
                    <img src={cancel} alt="cancel-icon" />
                </div>
                <div className="search-bar">
                    <div className="logo">
                        <img src={search} alt="search-logo" />
                    </div>
                    <div className="search-input">
                        <input type="text" placeholder="Search chains" onInput={(e) => searchTokens(e.target.value)} />
                    </div>
                </div>
                <div className="currencies">
                    {tokens.map(token => (
                        <div key={token.id} className={token.hide ? 'token hide' : 'token'} onClick={() => updateToken(token.id)}>
                            <div className="token-info">
                                <div className="token-logo">
                                    <img src={token.img} alt="token-logo" />
                                </div>
                                <div className="token-name">
                                    {token.name}
                                </div>
                            </div>
                            {token.selected && <div className="check">
                                <img src={check} alt="check-mark" />
                            </div>}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Modal