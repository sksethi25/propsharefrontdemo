import React from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import BusinessIcon from '@material-ui/icons/Business';
import HomeIcon from '@material-ui/icons/Home';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FlareIcon from '@material-ui/icons/Flare';

const defaultTabClass = "bottom-bar-tab";
const selectedTabClass = "bottom-bar-selected-tab";
const bottomBarTab = "bottom-bar";

class BottomBar  extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
     value:props.types.indexOf(props.selectedType)
    };
  }

  tabClasses = new Array(defaultTabClass, defaultTabClass, defaultTabClass,defaultTabClass);


  componentWillReceiveProps(nextProps){
    if(nextProps.types.indexOf(nextProps.selectedType)!=this.state.value ){
      this.setState({
        value:nextProps.types.indexOf(nextProps.selectedType)
      }); 
    }
  }

  setValue(value){
    this.setState({value:value});
  }
  

  render(){
    this.tabClasses = new Array(defaultTabClass, defaultTabClass, defaultTabClass,defaultTabClass);
    this.tabClasses[this.state.value]=selectedTabClass;
    return (
      <BottomNavigation
        value={this.state.value}
        onChange={(event, newValue) => {
          this.tabClasses[this.state.value] = defaultTabClass
          this.tabClasses[newValue] = selectedTabClass;
          this.setValue(newValue);
          this.props.handler(this.props.types[newValue]);
        }}
        showLabels
        className={bottomBarTab}
       >
        <BottomNavigationAction label="Commerical" icon={<ApartmentIcon />} className={this.tabClasses[0]}  />
        <BottomNavigationAction label="Residential" icon={<HomeIcon />} className={this.tabClasses[1]}   />
        <BottomNavigationAction label="Warehouse" icon={<BusinessIcon/>}  className={this.tabClasses[2]}  />
        <BottomNavigationAction label="Alternative" icon={<FlareIcon />}  className={this.tabClasses[3]} />
      </BottomNavigation>
    );

  }
}

export default BottomBar;
