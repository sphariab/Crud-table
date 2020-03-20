const styles = theme => ({
  table: {
    width: "60%",
    cursor: "pointer",
  },
  tableWrapper: {
    padding: "50px 30px",
    boxSizing: "border-box",
  },
  close: {
    color: "red",
    cursor: "pointer",
    display: "inline-block",
  },
  name:{
    fontWeight: "bold",
  },
  greenBtn: {
    backgroundColor: "green",
    color: "white",
    '&:hover': {
      backgroundColor: "green",
    }
  }
});

export default styles