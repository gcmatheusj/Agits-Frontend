const styles = theme => ({
  grid: {
    paddingTop: theme.spacing.unit * 3,
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
});

export default styles;
