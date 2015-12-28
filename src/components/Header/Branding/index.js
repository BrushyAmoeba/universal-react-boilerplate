// third party imports
import React, {Component} from 'react'
import radium from 'radium'
// local imports
import styles from './styles'


class Branding extends Component {

    render() {
        // grab the used props
        const {style, showBackground, ...unusedProps} = this.props

        // the source of the image to use for branding

        return (
            <span {...unusedProps} style={{...style, ...styles.container}}>
                Branding
            </span>
        )
    }
}

export default radium(Branding)
