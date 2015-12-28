// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


class Footer extends Component {
    render() {
        // grab the used props
        const {style, ...unusedProps} = this.props

        return (
            <div {...unusedProps} style={{...style, ...styles.container}}>
                Copyright Synca 2015. All rights reseved.
            </div>
        )
    }
}

export default radium(Footer)
