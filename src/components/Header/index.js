import "./index.css"

const languageOptions=[
    {id:1,value:"EN",language:"English"},
    {id:2,value:"HI",language:"Hindi"},
    {id:3,value:"TE",language:"Telugu"}
]

const Header=(props)=>{
    const {activeLanguage,changeLanguage}=props

    const onChangeLanguage=(event)=>{
        changeLanguage(event.target.value)
    }

    return(
        <nav className="nav-header">
            <img src="https://assets.ccbp.in/frontend/react-js/windows-logo-img.png" alt="website logo" className="website-logo"/>
            <select className="language-dropdown" value={activeLanguage} onChange={onChangeLanguage}>
                {languageOptions.map(eachOption=>(
                    <option value={eachOption.value} key={eachOption.id}>
                        {eachOption.language}
                    </option>
                ))}
            </select>
        </nav>
    )
}

export default Header