import * as React from 'react';
import './Header.css';
import {headerStyles} from '../style/header';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { IconButton, Typography, Drawer, ListItem, List, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import CodeRoundedIcon from '@material-ui/icons/CodeRounded';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SendIcon from '@material-ui/icons/Send';
import { Button } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import TwitterIcon from '@material-ui/icons/Twitter';


function Header(props) {
  
  const [open, setOpen] = React.useState(false);
  const useStyles = makeStyles((theme) => headerStyles(theme));
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(!open);
  }
  const handleDrawerClose = () => {
    setOpen(false);
  }
  
  return (
    // <div>
    <AppBar position="sticky" classes={{ root: classes.root }}>
      <div className={classes.sectionDesktop} >

        <Toolbar classes={{ root: classes.toolBarProps }}>
          <div className={classes.headerIcon}>
          <a href="#contact"><SendIcon viewBox="0 0 20 20" classes={{root : classes.sendIcon }} /><span className = "nav-links">Drop me a message</span></a>
            {/* <Button classes={{ root: classes.sendMessageButton }} size="small" onClick={props.handleModalOpen}>
              <SendIcon classes={{root : classes.homeIcon }}/>
                <span  className = "nav-links">Drop me a Message</span>
            </Button> */}
          </div>
          <ul id="navigation-menu">
            <li className="option"><a href="#"><HomeOutlinedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} /><span className = "nav-links">Home</span></a></li>
            <li className="option"><a href="#projects"><CodeRoundedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} /><span className = "nav-links">Projects</span></a></li>
            <li className="option"><a href="#skills"><BuildOutlinedIcon viewBox="0 0 25 20" classes={{root : classes.homeIcon }} /><span className = "nav-links">Skills</span></a></li>
            <li className="option"><a href="https://github.com/akshatBais" target="_blank"><GitHubIcon viewBox="0 0 25 22" classes={{root : classes.homeIcon }} /><span className = "nav-links">GitHub</span></a></li>
            {/* <li className="option"><a href="#contact"><CallOutlinedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} /><span className = "nav-links">Contact</span></a></li> */}
            <li className="option"><a href="https://in.linkedin.com/in/akshat-singh-bais-588976157" target="_blank"><LinkedInIcon viewBox="0 -1 20 22" classes={{root: classes.homeIcon}} /><span className = "nav-links">LinkedIn</span></a></li>
          </ul>
        </Toolbar>
      </div>
    
      <div className={classes.sectionMobile}>
        <Toolbar  classes={{ root: classes.toolBarProps }}>
          {/* <IconButton color="inherit" aria-label="open drawer"  onClick={handleDrawerOpen}> */}
            <MenuIcon viewBox="0 0 20 20" onClick={handleDrawerOpen} classes={{root : classes.menuIcon }}/>
          {/* </IconButton> */}
        </Toolbar>
      </div>
      <Drawer variant="temporary" anchor='left' open={open} className={classes.drawer} classes={{
        paper: classes.drawerPaper,
      }} ModalProps={{ onBackdropClick: handleDrawerClose }}>
        <div className="drawer-items">
          <div className="sidebar-picture-container">
            <img className="sidebar-picture" src={require("../../images/asbAnime.jpeg")} alt="" />
          </div>
          <div className={classes.dwarerItems}>
            <Divider />
            <List>
              <a href="#" onClick={handleDrawerClose}><HomeOutlinedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} />
                <span className = "nav-sidebar-links">Home</span>
              </a>
            </List>
            <Divider />
            <List>
              <a href="#projects" onClick={handleDrawerClose}><CodeRoundedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} />
              <span className = "nav-sidebar-links">Projects</span>

              </a>
            </List>
            <Divider />
            <List>
              <a href="#skills" onClick={handleDrawerClose}><BuildOutlinedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} />
              <span className = "nav-sidebar-links">Skills</span>

              </a>
            </List>
            <Divider />
            <List>
            <a className="header-link" href="#contact" onClick={handleDrawerClose}>
              <SendIcon viewBox="0 0 20 20" classes={{root : classes.sendIcon }} />
              <span className = "nav-sidebar-links">Contact</span></a>
            </List>
            <List>
              <a href="https://github.com/akshatBais" target="_blank" onClick={handleDrawerClose}><GitHubIcon viewBox="0 0 25 22" classes={{root : classes.homeIcon }} />
              <span className = "nav-sidebar-links">GitHub</span>

              </a>
            </List>
            <List>
              <a href="https://in.linkedin.com/in/akshat-bais-588976157" target="_blank" onClick={handleDrawerClose}><LinkedInIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} />
              <span className = "nav-sidebar-links">LinkedIn</span>

              </a>
            </List>
            {/* <List>
              <a href="#contact" onClick={handleDrawerClose}><CallOutlinedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} />
              <span className = "nav-sidebar-links">Contact</span>

              </a>
            </List> */}
       
            <List>
           <a className="header-link" href="https://in.linkedin.com/in/akshat-bais-588976157">
              <TwitterIcon classes={{root : classes.homeIcon }} />
              <span className = "nav-sidebar-links">Twitter</span>
            </a>
            </List>


            
          </div>
        </div>
      </Drawer>

     
    </AppBar >



  );
}
export default Header;