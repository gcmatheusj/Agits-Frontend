import { fade } from '@material-ui/core/styles/colorManipulator'

const styles = theme => ({
    //ExpansionSubjects.js
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },

    //index.js
    root: {
        width: '100%',
    },
    titleGrid: {
        textAlign: 'left',
    },
    titleIndex: {
        fontWeight: 'bold',
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        },
    },
    Subjects: {
        marginTop: "24px",
        fontSize: 20,
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        },
    },
    gridSubjects: {
        direction: 'row',
    },
    gridAccordion: {
        alignItem: "center",
        justifyContent: "center",
    },
    textField: {
        marginTop: 25,
        width: '100%',
    },
    textField2: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 250,
    },
    buttons: {
        margin: theme.spacing.unit,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },

    //PaperSubject.js
    rootPaper: {
        padding: 5,
        paddingLeft: 30,
        marginTop: 5
    },
    gridPaper: {
        alignItems: 'center'
    },
})

export default styles