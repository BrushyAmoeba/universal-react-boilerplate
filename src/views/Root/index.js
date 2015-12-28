// third party imports
import React, {Component} from 'react'
import radium from 'radium'
import Helmet from 'react-helmet'
// local imports
import styles from './styles'


class Root extends Component {
    render() {
        return (
            <main style={styles.container}>
                <Helmet
                    titleTemplate="%s | SyncaTech.com"
                    meta={[
                    ]}
                    link={[
                        {rel:'icon', type: 'image/png', href:"/favicon.ico"},
                    ]}
                />
                <article style={styles.mainContent}>
                    {this.props.children}
                </article>
            </main>
        )
    }
}

export default radium(Root)
