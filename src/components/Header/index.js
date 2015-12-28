// third party imports
import React, {Component} from 'react'
import {Link} from 'react-router'
// local imports
import styles from './styles'
import Branding from './Branding'
import Navigation from './Navigation'


class Home extends Component {

    static defaultProps = {
        showBackground: true,
        showHome: true,
        showBranding: true,
    }

    static propTypes = {
        showBackground: React.PropTypes.bool,
        showHome: React.PropTypes.bool,
        showBranding: React.PropTypes.bool,
    }

    render() {
        const {showBackground, showHome, showBranding, style, ...unusedProps} = this.props
        // the style for the links
        const linkStyle = showBackground ? styles.link : styles.linkNoBackground
        const containerStyle = showBackground ? styles.container : styles.containerNoBackground
        const brandingStyle = showBackground ? styles.branding : styles.brandingNoBackground

        return (
            <header style={{...style, ...containerStyle}} {...unusedProps}>
                {showBranding && (
                    <div style={{...linkStyle, ...brandingStyle}}>
                        <Link to="/">
                            <Branding showBackground={showBackground}/>
                        </Link>
                    </div>
                )}
                <Navigation showBackground={showBackground} showHome={showHome}/>
            </header>
        )
    }
}

export default Home
