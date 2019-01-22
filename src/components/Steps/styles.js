const styles = theme => ({
    //StepsCard
      rootStepsCard: {
      flexGrow: 1,
      maxWidth: '100%',
      padding: 1,
      paddingBottom: 10,
      paddingTop: 10,
      [theme.breakpoints.down('sm')]: {
        padding: 1,
        marginTop: 10,
        marginBottom: 20,
      },
    },
    gridCard: {
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
      minHeight: 150,
    },
    gridText: {
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'center',
      },
    },
    title: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.875rem',
    },
    },
    titleCard: {
      fontWeight: 'bold',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.9rem',
        textAlign: 'center',
      },
    },
    textCard: {
        textAlign: 'justify',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
      },
    },
    img: {
        margin: 20,
        width: 100,
    },

    //DefineDomainAndSubject
    rootDefineDomain: {
        marginTop: '30px',
        marginBottom: '10px',
      },
      expansionPanel: {
        paddingTop: '5px',
        paddingBottom: '5px',
        borderTop: '1px solid #bdbdbd',
        borderRight: '1px solid #bdbdbd',
        borderLeft: '1px solid #bdbdbd',
      },
      expansionPanelFont: {
        fontSize: '16pt',
      },
      expansionPanelDetail: {
        borderRight: '1px solid #bdbdbd',
        borderLeft: '1px solid #bdbdbd',
        margin: '0',
        padding: '0',
      },
      label: {
        paddingTop: '30px',
        fontSize: '14pt',
      },
      formControl: {
        '@media only screen and (max-width: 360px)': {
          // Galaxy S3 width Compatibility
          maxWidth: '177px',
        },
        width: '100%',
      },
      gridContainer: {
        '@media only screen and (max-width: 360px)': {
          // Galaxy S3 width Compatibility
          padding: '20px',
        },
        paddingTop: '0',
        padding: '15px',
      },
      gridButton: {
        float: 'right',
      },
      divider: {
        marginTop: '25px',
        marginBottom: '15px',
      },

      //EvaluationMethods / DefineReports / DefinePedagogicalModel
      title: {
        textAlign: 'justify',
        [theme.breakpoints.down('sm')]: {
          fontSize: '0.9rem',
        },
      },
  });

  export default styles