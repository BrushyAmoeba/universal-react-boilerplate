import colors from '../../../colors'

const breakpoint = 700

const link = {
    color: colors.darkGrey,
    textDecoration: 'none',
    fontSize: 21,
    textTransform: 'capitalize',
    fontWeight: 400,
}

export default {
    link,
    linkNoBackground: {
        ...link,
        color: 'white',
    },
    linkContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexGrow: 1,
    },
    navIcon: {
        fontSize: 35,
        margin: 20,
        display: 'none',
        [`@media (max-width:${breakpoint}px)`]: {
            display: 'inline-block',
        },
    },
    textIcon: {
        display: 'none',
        [`@media (min-width:${breakpoint+1}px)`]: {
            display: 'inline-block',
        },
    },
    activeLink: {
        color: colors.blue,
    }
}
