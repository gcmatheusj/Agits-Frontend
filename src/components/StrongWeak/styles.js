const styles = theme => ({
  paper: {
    width: '100%',
    overflowX: 'auto',
    paddingBottom: theme.spacing.unit * 4,
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
  top: {
    color: theme.palette.common.white,
  },
  content: {
    height: 200,
    padding: 5,
  },
  gridCard: {
    paddingLeft: 15,
    paddingRight: 15,
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
