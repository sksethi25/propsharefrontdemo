import React from 'react';

import Appbar from '../components/Appbar.js';
import BottomBar from '../components/Bottombar';
import PropertyWrapper from '../components/Property/PropertyWrapper';
import Loader from '../components/Backdrop';


const page="Home";
class Home  extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
          isLoaded: false,
          fixedTypes:['commerical', 'residential', 'warehouse', ''],
          selectedType:'commerical',
          selectedCity:"",
          selectedSort:1,
          filters:{
            city: [],
            type: [],
            sort: [],
            selected: {
                city: '',
                type: '',
                sort: 1
            }
          }
      };

      this.setSelectedType = this.setSelectedType.bind(this);
      this.setCurrentFilters = this.setCurrentFilters.bind(this);
      this.setPropertyLoaded = this.setPropertyLoaded.bind(this);
      this.searchHandler = this.searchHandler.bind(this);
  }

    setCurrentFilters(filters){
        this.setState({
            selectedType:filters.selected.type,
            selectedCity:filters.selected.city,
            selectedSort:filters.selected.sort,
            filters:filters
        });

    }

    setSelectedType(type){
        this.setState({selectedType:type});
    }


    setPropertyLoaded(loaded){
        this.setState({isLoaded:loaded});
    }

    searchHandler= function(city, type, sort){
        this.setState({
            selectedType:type,
            selectedCity:city,
            selectedSort:sort
        });
    }

    render(){
        return (
            <div>
            <Loader 
                state={this.state.isLoaded} 
            />
            <Appbar  
                page={page}  
                filters={this.state.filters}
                searchHandler={this.searchHandler}
            />
            <PropertyWrapper 
                handler={this.setCurrentFilters} 
                selectedType={this.state.selectedType}
                selectedCity={this.state.selectedCity}  
                selectedSort={this.state.selectedSort}    
                loader={this.setPropertyLoaded}
            />
            <BottomBar 
                types={this.state.fixedTypes} 
                selectedType={this.state.selectedType} 
                handler={this.setSelectedType} 
            />
            </div>
            )
        }
}

export default Home;