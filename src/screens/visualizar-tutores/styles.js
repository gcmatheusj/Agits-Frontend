const styles = theme => ({
  card: {
    maxWidth: 280,
    marginTop: 20,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 20,
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
    color: theme.palette.primary.dark,
  },
});

export default styles;
