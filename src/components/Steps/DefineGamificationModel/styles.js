export const styles = theme => ({
  root: {
    flexGrow: 1,
    paddingLeft: 1,
    padding: 10,
    [theme.breakpoints.down('sm')]: {
      padding: 1,
      marginTop: 10,
      marginBottom: 20,
    },
  },
  select: {
    boxShadow: `0 0 9px ${theme.palette.primary.main}, 0 0 15px ${theme.palette.primary.main}`,
  },
  gridCard: {
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  gridText: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  title: {
    padding: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.875rem',
    },
  },
  titleCard: {
    fontWeight: 'bold',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      textAlign: 'center',
    },
  },
  textCard: {
    textAlign: 'justify',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.8rem',
      marginBottom: 15,
    },
  },
  cardButton: {
    display: 'block',
    textAlign: 'initial',
  },
  gridContent: {
    padding: 20,
    paddingBottom: 0,
  },
  image: {
    [theme.breakpoints.down('sm')]: {
      width: 10,
      height: 10,
    },
  },
  container: {
    display: 'flex',
  },
  img: {
    margin: 20,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
      marginBottom: 0,
    },
    width: 128,
  },
  gridGame: {
    marginLeft: 20,
    marginRight: 20,
  },
  paper: {
    margin: theme.spacing.unit,
    width: 60,
    height: 60,
  },
  collapse: {
    width: '100%',
  },
  icon: {
    height: 40,
    width: 40,
    margin: 2,
  },
});
