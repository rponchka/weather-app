import { css } from "@emotion/react"
import Logo from "./Logo"
import Navigation from "./Navigation"

const  Header = () => {

    return(
        <header css={css`width:100%;height:80px;box-sizing:border-box; padding: 0 180px; display:flex;align-items:center;`}>
            <Logo/>
            <Navigation/>
            <div>
            </div>
        </header>
    )
}

export default Header