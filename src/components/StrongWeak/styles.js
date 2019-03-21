const styles = theme => ({
  paper: {
    width: '100%',
    overflowX: 'auto',
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
