import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import classes from './style.module.css';

function NavBar(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.container}>
      <div className={classes.navigationBar}>
        <a onClick={props.onGradeKitClick} className={classes.firstItem}>GradeKit</a>
        <div className={classes.navItems}>
            <a onClick={props.onDownloadClick}>Download</a>
            <a onClick={props.onFeaturesClick}>Features</a>
            <a onClick={props.onContactClick}>Contact</a>
        </div>
        <button className={classes.hamburgerMenuButton} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          <div className={classes.hamburgerBars}></div>
          <div className={classes.hamburgerBars}></div>
          <div className={classes.hamburgerBars}></div>
        </button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={props.onDownloadClick}>Download</MenuItem>
          <MenuItem onClick={props.onFeaturesClick}>Features</MenuItem>
          <MenuItem onClick={props.onContactClick}>Contact</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default NavBar;