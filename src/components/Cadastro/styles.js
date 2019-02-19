const styles = theme => ({
    root: {
      height: '90vh',
    },
    grid: {
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 16,
        marginRight: 16,
      },
    },
    loginPadding: {
      paddingLeft: 24,
      paddingRight: 24,
      [theme.breakpoints.down('sm')]: {
        alignItems: 'flex-start',
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
    login: {
      minHeight: 64,
      [theme.breakpoints.down('sm')]: {
        minHeight: 56,
      },
    },
    label: {
      marginRight: 20,
      [theme.breakpoints.down('xs')]: {
        display: 'none',
      },
    },
    cardContainer: {
      marginLeft: 24,
      marginRight: 24,
      maxWidth: 550,
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
    title: {
      fontSize: 27,
      marginTop: 8,
      fontWeight: 'bold',
    },
    subheading: {
      marginBottom: 8,
    },
    input: {
      width: '100%',
    },
    textFieldLeft: {
      marginRight: theme.spacing.unit,
      [theme.breakpoints.down('xs')]: {
        marginRight: 0,
        width: '100%',
      },
    },
    textFieldRight: {
      marginLeft: theme.spacing.unit,
      [theme.breakpoints.down('xs')]: {
        marginLeft: 0,
        width: '100%',
      },
    },
    inputname: {
      width: '50%',
    },
    inputpassword: {
      width: '50%',
    },
    button: {
      marginTop: 8,
      marginBottom: 16,
    },
    cardActions: {
      marginBottom: 10,
    },
  });

  export default styles