import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

class FilterSelect extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      [props.filterName]:props.filters.selected[props.filterName],
      filterName:props.filterName,
      filters:props.filters,
      notShowAllOption: props.notShowAllOption
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.filters.selected[nextProps.filterName]!=this.state[nextProps.filterName] )
      this.setState({
       [nextProps.filterName]:nextProps.filters.selected[nextProps.filterName]}); 
  }

  setfilterName = function(value){
    this.setState({
      [this.state.filterName]:value});
  }

  handleChange = (event) => {
    this.setfilterName(event.target.value);
    this.props.handler(event.target.value == "all" ? "" : event.target.value);
  };


  Capitalize = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  allOption=function(){
    if(this.state.notShowAllOption == "false"){
      return <MenuItem value={"all"} >All</MenuItem>
    }
    return "";
    }

  getValue(){
    if(this.state[this.state.filterName] == ''){
      return "all";
    }
	  return this.state[this.state.filterName]
  }

  render(){
    return (
      <div >
        <FormControl style={{width:'100%', marginTop: '10px', marginBottom: '10px'}}>
          <InputLabel id="demo-simple-select-label">
            {this.Capitalize(this.state.filterName)}
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={this.getValue()}
            onChange={this.handleChange}
            
          >
          {this.allOption()}
          {this.state.filters[this.state.filterName].map((value, index) => {
            return <MenuItem value={this.state.filterName=="sort" ? value["id"]: value[this.state.filterName]} key={value[this.state.filterName]}>{this.Capitalize(value[this.state.filterName])}</MenuItem>
          })}
          </Select>
        </FormControl>
      </div>
      );
    }


  }

  export default FilterSelect;
