import logo from '../assets/neofi-logo.svg'
const Navbar = () => {
    const tabs = [
        {
            id: 1,
            name: 'Trade',
            link: '#',
            active: true
        },
        {
            id: 2,
            name: 'Earn',
            link: '#',
            active: false
        },
        {
            id: 3,
            name: 'Support',
            link: '#',
            active: false
        },
        {
            id: 4,
            name: 'About',
            link: '#',
            active: false
        }
    ]
    return (
        <header>
            <nav>
                <div className="logo">
                    <img src={logo} alt="company-logo" />
                </div>
                <div className="tabs">
                    <ul>
                        {tabs.map(tab => (
                            <li key={tab.id} className={tab.active ? 'active' : ''}>
                                <a href={tab.link} className={tab.active ? 'active' : ''}>{tab.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="button">
                    <button>Connect wallet</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar