import React from 'react'
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core"
// import './btnPlay.css';

// const play = '../../../assets/images/play-video.png';

BtnPlay.propTypes = {
    urlYoutube: PropTypes.string,
    cssRoot: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
  };
  
  const useStyles = makeStyles({
    button: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
  
      zIndex: 1,
      opacity: 0,
  
      background: "0 0",
      border: "none",
  
      height: props => props.width ? props.width : 120,
      width: props => props.height ? props.height : 120,
      transition: "all .2s",
    },
    // imgPlay: {
    //   height: "100%",
    //   width: "100%",
    //   transition: "all .2s",
    //   '&:hover': { opacity: 0.7 }
    // },
  })
  
  export default function BtnPlay({ cssRoot, width, height, urlYoutube }) {
    const classes = useStyles({ width, height });
  
    const dispatch = useDispatch()
  
    const openModal = () => {
      dispatch({
        type: 'OPEN_MODAL', payload: {
          open: true,
          urlYoutube
        }
      })
    };
  
    return (
      <div className={`${classes.button} ${cssRoot}`} onClick={() => openModal()}>
        {/* <img className={classes.imgPlay} onClick={() => openModal()} alt="play" /> */}
      </div>
    )
  }