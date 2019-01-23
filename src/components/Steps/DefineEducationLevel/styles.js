const styles = theme => ({
    //index.js
    root: {
      width: '100%',
      paddingBottom: 10
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
        flexDirection: 'column',
        alignItems: 'center',
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
  title: {
    marginBottom: 10,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem'
    }
  },
  //Collapse
  imgCollapse: {
    width: 230,
  },
  });

  export default styles