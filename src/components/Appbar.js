import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


import SideDrawer from '../components/SideDrawer';


class TopAppBar extends React.Component{
  
  constructor(props) {
    super(props);
  }


  toggleDrawer(){
    this.setState({

    })
  }
 
  render(){
    return (
      <div className="appbar-root">
        <AppBar position="static" className="primary-bg" >
          <Toolbar>
            {/* <IconButton edge="start" className="mr16" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" className="appbar-root">
              {this.props.page}
            </Typography>
            <SideDrawer 
                filters={this.props.filters} 
                cityHandler={this.props.cityHandler}
                typeFilterHandler={this.props.typeFilterHandler} 
                sortHandler={this.props.sortHandler} 
                searchHandler={this.props.searchHandler}
              />
          </Toolbar>
        </AppBar>
      </div>
    );
  }

}

export default TopAppBar;


