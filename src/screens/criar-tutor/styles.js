export const styles = theme => ({
  root: {
    flex: 1,
    width: '100%',
  },
  card: {
    maxWidth: 280,
    textAlign: 'center',
    height: 360,
    margin: 30,
    [theme.breakpoints.down('sm')]: {
      padding: 1,
      margin: 10,
    },
  },
  cardContent: {
    paddingLeft: 16,
    paddingRight: 16,
  },
  cardAction: {
    padding: 10,
    height: '100%',
  },
  titleContainer: {
    marginTop: 10,
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      marginLeft: 10,
      marginTop: 15,
      marginBottom: 15,
    },
  },
  subtitle: {
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      marginLeft: 10,
      marginTop: 15,
      marginBottom: 15,
    },
  },
  titleCard: {
    fontWeight: 'bold',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
    },
  },
  textCard: {
    fontSize: '0.875rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
    },
  },
  img: {
    height: 200,
    width: 200,
  },
  container: {
    flexGrow: 1,
  },
  buttonContainer: {
    marginBottom: theme.spacing.unit * 2,
    marginTop: 50,
    [theme.breakpoints.down('sm')]: {
      marginTop: 20,
    },
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    justify: 'center',
  },
});
