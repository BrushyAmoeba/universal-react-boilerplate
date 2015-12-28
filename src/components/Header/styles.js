import colors from '../../colors'


const container = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 75,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    backgroundColor: 'white',
    borderBottom: `1px solid ${colors.lightGrey}`,
}

const branding = {
    flexGrow: 4,
    paddingLeft: 20,
}

export default {
    container,
    containerNoBackground: {
        ...container,
        backgroundColor: 'none',
        borderBottom: 'none',
    },
    branding: {
        ...branding,
        color: colors.darkGrey,
    },
    brandingNoBackground: {
        ...branding,
        color: 'white',
    },
}
