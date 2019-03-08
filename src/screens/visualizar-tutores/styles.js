const styles = theme => ({
  card: {
    maxWidth: 280,
    marginTop: 20,
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      // marginLeft: 20,
    },
  },
  media: {
    height: 120,
    padding: 20,
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    height: 120,
    padding: 20,
  },
  top: {
    color: theme.palette.common.white,
  },
  iconSettings: {
    color: '##757575',
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
  grid: {
    margin: 20,
  },
});

export default styles;
