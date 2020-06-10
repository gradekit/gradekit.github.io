import React from 'react';
import classes from './style.module.css';

function NavBar(props) {
  return (
    <div className={classes.container}>
      <div className={classes.navigationBar}>
        <a onClick={props.onGradeKitClick} className={classes.firstItem}>GradeKit</a>
        <div className={classes.navItems}>
            <a onClick={props.onDownloadClick}>Download</a>
            <a onClick={props.onFeaturesClick}>Features</a>
            <a onClick={props.onContactClick}>Contact</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;