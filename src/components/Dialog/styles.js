const styles = theme => ({
  titleGrid: {
    textAlign: 'left',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  textField: {
    marginTop: 25,
    width: '100%',
  },
});

export default styles;
