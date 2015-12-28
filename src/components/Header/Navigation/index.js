// third party imports
import React, {Component} from 'react'
import {Link} from 'react-router'
// local imports
import styles from './styles'


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
        const {showBackground, showHome, dispatch, ...unusedProps} = this.props
        // the style for the links
        const linkStyle = showBackground ? styles.link : styles.linkNoBackground

        return (
            <nav style={styles.linkContainer}>
                {showHome && false && (
                    <Link to="/" style={linkStyle} className="horizontal_navLink" activeStyle={styles.activeLink}>
                        <span style={styles.textIcon}>Home</span>
                        <i style={styles.navIcon} className="icon icon-home navIcon"/>
                    </Link>
                )}
            </nav>
        )
    }
}

export default Home
