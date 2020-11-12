import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0,0,0,.15)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: 'solid'
  },
  fullHeightCard: {
    height: '100%'
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '7px',
    height: '100%',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white'
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white'
  },
  grid: {
    display: 'flex'
  },
  details: {
    margin: '20px'
  },
  cardContent: {
    padding: '16px 0px'
  },
  cardActions: {
    flex: 1,
    padding: '0px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    padding: '4px'
  }
}));
