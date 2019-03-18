const styles = theme => ({
  grid: {
    paddingTop: theme.spacing.unit * 3,
  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
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
  strong: {
    // height: 120,
    padding: 10,
    backgroundColor: theme.palette.primary.main,
  },
  weak: {
    // height: 120,
    padding: 10,
    backgroundColor: theme.palette.secondary.main,
  },
  content: {
    height: 200,
    padding: 5,
  },
  top: {
    color: theme.palette.common.white,
  },
  gridCard: {
    padding: 10,
  },
  list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: '100%',
  },
});

export default styles;
