const styles = theme => ({
    //index.js
    root: {
      width: '100%',
    },
    select: {
      backgroundColor: '#fafafa',
      margin: 20,
      width: 180,
      boxShadow: '0 0 9px #1976d2, 0 0 15px #1976d2'
    },
    grid: {
      width: '100%',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
  button: {
    backgroundColor: '#fafafa',
      margin: 20,
        width: 180,
    },
  cardAction: {
    padding: 10,
    },
  media: {
    height: 120,
      width: 150,
        marginBottom: 20
  },
  img: {
    padding: 20
  },

  //Collapse
  imgCollapse: {
    width: 230,
  },
  grid: {
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  });

  export default styles