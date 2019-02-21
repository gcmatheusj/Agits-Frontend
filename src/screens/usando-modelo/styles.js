const styles = theme => ({
  root: {
    width: '100%',
  },
  titleContainer: {
    marginTop: 10,
    textAlign: 'center',
  },
  pageTitle: {
    margin: '20px',
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      marginLeft: 10,
      marginTop: 15,
      marginBottom: 15,
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  stepper: {
    background: 'none',
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      marginTop: 10,
    },
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

export default styles;
