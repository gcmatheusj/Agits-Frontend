const styles = theme => ({
  grid: {
    paddingTop: theme.spacing.unit * 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.1rem',
      padding: 10,
    },
  },
});

export default styles;
