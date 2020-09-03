import * as React from 'react';
import './Header.css';
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

function Header() {
  const drawerWidth = 240;
  const [open, setOpen] = React.useState(false);
  const useStyles = makeStyles((theme) =>
    createStyles({
      root: {
        // #181818
        background: '#24292E',
        boxShadow: 'none',
        [theme.breakpoints.down('sm')]: {
          height: '5vh',
        }
      },
      toolBarProps: {
        minHeight: '50px',
        justifyContent : "space-between"
      },
      sectionDesktop: {
        display: 'none',
        justifyContent: 'flex-end',
        [theme.breakpoints.up('sm')]: {
          display: 'inline-block',
        }
      },
      sectionMobile: {
        color: 'black',
        height: '50px',
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
        },
        [theme.breakpoints.up('sm')]: {
          display: 'none',
        }
      },
      homeIcon : {
        color: "#88F9FC",
        margin : "0 10px",
        transform : "scale(1.1)",
        fontSize : "large",
        '&:hover': {
          transform : "scale(2.2)"
        }
      },
      sendMessageButton : {
        border : "1px solid",
        '&:hover': {
          color : "#88F9FC"
        }
      },
      headerIcon : {
      },
      menuButtonProps: {
        color: '#D1D1D1'
        
      },
      drawer: {
        [theme.breakpoints.up('sm')]: {
          width: drawerWidth,
          flexShrink: 0,
        }
      },
      drawerPaper: {
        background: '#24292E',

        width: drawerWidth
      },
      dwarerItems: {
        padding : "10px",
        marginTop: '30px'
      }
    })
  );
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
          <Button classes={{ root: classes.sendMessageButton }} size="small">
            <SendIcon classes={{root : classes.homeIcon }}/>
               <span  className = "nav-links">Drop me a Message</span>
            </Button>
          {/* TO BE ON LEFT */}
        </div>
          <ul id="navigation-menu">
            <li className="option"><a href="#"><HomeOutlinedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} /><span className = "nav-links">Home</span></a></li>
            <li className="option"><a href="#experience"><CodeRoundedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} /><span className = "nav-links">Work Experience</span></a></li>
            <li className="option"><a href="#skills"><BuildOutlinedIcon viewBox="0 0 25 20" classes={{root : classes.homeIcon }} /><span className = "nav-links">Skills</span></a></li>
            <li className="option"><a href="https://github.com/akshatBais" target="_blank"><GitHubIcon viewBox="0 0 25 22" classes={{root : classes.homeIcon }} /><span className = "nav-links">GitHub</span></a></li>
            <li className="option"><a href="#contact"><CallOutlinedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} /><span className = "nav-links">Contact</span></a></li>
            <li className="option"><a href="https://in.linkedin.com/in/akshat-bais-588976157" target="_blank"><LinkedInIcon viewBox="0 -1 20 22" classes={{root: classes.homeIcon}} /><span className = "nav-links">LinkedIn</span></a></li>
          </ul>
        </Toolbar>
      </div>
      <div className={classes.sectionMobile}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen}>
            <MenuIcon classes={{root: classes.menuButtonProps}}/>
          </IconButton>
        </Toolbar>
      </div>
      <Drawer variant="temporary" anchor='left' open={open} className={classes.drawer} classes={{
        paper: classes.drawerPaper,
      }} ModalProps={{ onBackdropClick: handleDrawerClose }}>
        <div className="drawer-items">
          <div className="sidebar-picture-container">
            <img className="sidebar-picture" src={require("../../images/asb.jpg")} alt="" />
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
              <a href="#experience" onClick={handleDrawerClose}><CodeRoundedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} />
              <span className = "nav-sidebar-links">Work Exp.</span>

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
              <a href="https://github.com/akshatBais" target="_blank" onClick={handleDrawerClose}><GitHubIcon viewBox="0 0 25 22" classes={{root : classes.homeIcon }} />
              <span className = "nav-sidebar-links">GitHub</span>

              </a>
            </List>
            <List>
              <a href="https://in.linkedin.com/in/akshat-bais-588976157" target="_blank" onClick={handleDrawerClose}><LinkedInIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} />
              <span className = "nav-sidebar-links">LinkedIn</span>

              </a>
            </List>
            <List>
              <a href="#contact" onClick={handleDrawerClose}><CallOutlinedIcon viewBox="0 0 20 20" classes={{root : classes.homeIcon }} />
              <span className = "nav-sidebar-links">Contact</span>

              </a>
            </List>
            
          </div>
        </div>
      </Drawer>

    </AppBar >



  );
}
export default Header;