<<<<<<< HEAD
//Header.js
const styles = theme => ({
    root: {
      backgroundColor: '#003175',
    },
    logo: {
      marginTop: 5,
      width: 130,
      [theme.breakpoints.down('sm')]: {
        width: 110,
      },
    },
    button: {
      backgroundColor: '#ff572f',
      color: 'white',
    },
    label: {
      marginTop: 8,
      marginRight: 20,
      fontSize: 18,
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },

    //RecuperarSenha.js
    grid: {
        flexGrow: 1,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
          alignItems: 'flex-start',
          marginTop: 30,
          marginLeft: 16,
          marginRight: 16,
        },
      },
      card: {
        maxWidth: 550,
      },
      title: {
        fontSize: 27,
        marginTop: 8,
        fontWeight: 'bold',
      },
      subheading: {
        marginBottom: 8,
      },
      input: {
        width: '100%',
      },
      cardActions: {
        marginBottom: 10,
      },
      formContainer: {
        width: '100%',
      },
  });
=======
//Header.js
const styles = theme => ({
  root: {
    backgroundColor: '#003175',
  },
  logo: {
    marginTop: 5,
    width: 130,
    [theme.breakpoints.down('sm')]: {
      width: 110,
    },
  },
  button: {
    backgroundColor: '#ff572f',
    color: 'white',
  },
  label: {
    marginTop: 8,
    marginRight: 20,
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  //RecuperarSenha.js
  grid: {
    flexGrow: 1,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      alignItems: 'flex-start',
      marginTop: 30,
      marginLeft: 16,
      marginRight: 16,
    },
  },
  card: {
    maxWidth: 550,
  },
  title: {
    fontSize: 27,
    marginTop: 8,
    fontWeight: 'bold',
  },
  subheading: {
    marginBottom: 8,
  },
  input: {
    width: '100%',
  },
  cardActions: {
    marginBottom: 10,
  },
  formContainer: {
    width: '100%',
  },
})

export default styles
>>>>>>> f86ad467b85874a4d24a7643b329a86a4fd4f948
