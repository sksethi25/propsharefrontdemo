import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import FilterSelect from '../components/FilterSelect';

class FilterCard extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      
    }

    this.filters={
      'city':this.props.filters.selected.city,
      "type":this.props.filters.selected.type,
      "sort":this.props.filters.selected.sort,

      'prevcity':this.props.filters.selected.city,
      "prevtype":this.props.filters.selected.type,
      "prevsort":this.props.filters.selected.sort,
    }

    this.changed=false;
    this.selectedCity = this.selectedCity.bind(this);
    this.selectedTypeFilter = this.selectedTypeFilter.bind(this);
    this.selectedSort = this.selectedSort.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
     
  }


  selectedCity = function(city){
    this.filters['city']=city;
    this.changed =true; 
  }

  selectedTypeFilter = function(type){
    this.filters['type']=type;
    this.changed =true;
  }

  selectedSort = function(sort){
    this.filters['sort']=sort;
    this.changed =true;
  }

  searchHandler= function(){
    if(this.changed){
      this.props.searchHandler(this.filters['city'], this.filters['type'], this.filters['sort']);
      this.props.toggleDrawer();
      this.changed=false;
    }
  }

  reset = function(){
    this.changed=false;
    this.filters['city']=this.filters['prevcity'];
    this.filters['type']=this.filters['prevtype'];
    this.filters['sort']=this.filters['prevsort'];
    this.forceUpdate();
  }



  render(){

      return (
        <Card className="card_root" style={{boxShadow: 'none'}}>
          <CardContent >
                <FilterSelect  filters={this.props.filters} handler={this.selectedCity} filterName={"city"} notShowAllOption="false" />
                <FilterSelect  filters={this.props.filters} handler={this.selectedTypeFilter} filterName={"type"} notShowAllOption="false" />
                <FilterSelect  filters={this.props.filters} handler={this.selectedSort} filterName={"sort"} notShowAllOption="true" />
                <div className="button_container">
                <Button onClick={this.searchHandler} variant="contained" className="card-search-button" >
                  <SearchIcon />Apply Filter
                </Button>
                </div>
          </CardContent>
        </Card>
      );
   }


}

export default FilterCard;