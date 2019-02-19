export const index = theme => ({
  root: {
    width: "100%",
    paddingBottom: 10
  },
  select: {
    backgroundColor: theme.palette.common.white,
    margin: 20,
    width: 180,
    boxShadow: `0 0 9px ${theme.palette.primary.main}, 0 0 15px ${
      theme.palette.primary.main
    }`
  },
  grid: {
    width: "100%",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center"
    }
  },
  button: {
    backgroundColor: theme.palette.common.white,
    margin: 20,
    width: 180
  },
  cardAction: {
    padding: 10
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.9rem"
    }
  }
});

export const collapse = {
  imgCollapse: {
    width: 230
  }
};
