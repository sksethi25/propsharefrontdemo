import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';
import CloseIcon from '@material-ui/icons/Close';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import FilterCard from '../components/FilterCard';

class SideDrawer extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      right: false,
      isOpen:false
    };

    this.cardRefrence = React.createRef();
    this.resetFilters= this.resetFilters.bind(this);
  }

  resetFilters = function(){
    this.cardRefrence.current.reset();

  }

  toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    this.setState({isOpen: open});
  };

  render(){     
    return (
      <div class="mrt7">
      <React.Fragment key="right">
        <FilterListIcon   onClick={this.toggleDrawer(true)}/>
      
      <Drawer
        anchor={"right"}
        open={this.state.isOpen}
        onClose={this.toggleDrawer(false)}
        classes={{
          paper:'full-width',
        }}
      >

      <div className={"card-footer side-drawer-header"} > 
      <div onClick={this.toggleDrawer(false)} ><CloseIcon /></div>
      <div className="side-drawer-heading">Filters</div>
      <div onClick={this.resetFilters}><RotateLeftIcon /></div>
      </div>

      <FilterCard 
        ref={this.cardRefrence} 
        filters={this.props.filters}
        cityHandler={this.props.cityHandler}
        typeFilterHandler={this.props.typeFilterHandler} 
        sortHandler={this.props.sortHandler} 
        searchHandler={this.props.searchHandler}
        toggleDrawer={this.toggleDrawer(false)}
      />
      </Drawer>
      </React.Fragment>
      </div>
      );
  }
}

export default SideDrawer;