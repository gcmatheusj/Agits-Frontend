const styles = theme => ({
    grid: {
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'flex-start',
        marginTop: 30,
        marginLeft: 16,
        marginRight: 16,
      },
    },
    root: {
      height: '90vh',
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
    buttonGS: {
      backgroundColor: '#ff572f',
      color: 'white',
    },
    button: {
      marginTop: 8,
      marginBottom: 16,
    },
    cardContainer: {
      maxWidth: 550,
    },
    newAccountPadding: {
      paddingLeft: 24,
      paddingRight: 24,
      [theme.breakpoints.down('sm')]: {
        alignItems: 'flex-start',
        paddingLeft: 16,
        paddingRight: 16,
      },
    },
    newAccount: {
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
    cardActions: {
      marginBottom: 10,
    },
  });

  export default styles