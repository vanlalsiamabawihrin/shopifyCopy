import React from 'react'
import './index.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import RepeatIcon from '@material-ui/icons/Repeat';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import {Grid, Slider} from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footer_left">
                <img  className="footer_albumLogo" src="https://upload.wikimedia.org/wikipedia" alt=""/>
                <div className="song_info">
                    <h4>yea </h4>
                    <p>Usher</p>
                </div>
                
            </div>
            <div className="footer_center">
                <ShuffleIcon className="footer_icon"/>
                <SkipPreviousIcon className="footer_icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer_icon"/>
                <SkipNextIcon className="footer_icon"/>
                <RepeatIcon className="footer_icon"/>
            </div>
            <div className="footer_right">
                <Grid container spacing = {2}>
                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby = "continuous-slide"/>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer 
