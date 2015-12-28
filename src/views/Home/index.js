// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'
import Header from 'components/Header'
import Footer from 'components/Footer'

class Home extends Component {
    render() {
        return (
            <div style={styles.homeContainer}>
                <Helmet
                    title="Home"
                />
                <Header
                    showBackground={false}
                    showHome={false}
                />
                    Welcome!
                <Footer />
            </div>
        )
    }
}


export default radium(Home)
