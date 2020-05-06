import React from 'react';
import PropertyItem from "./PropertyItem";

class PropretyWrapper extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
           error: null,
           isLoaded: false,
           PropertyList: [],
           selectedType:this.props.selectedType,
           selectedCity:this.props.selectedCity,
           selectedSort:this.props.selectedSort

       };
       this.getProperties = this.getProperties.bind(this);
   } 

    componentWillReceiveProps(nextProps){
        if(nextProps.selectedType!=this.state.selectedType || 
            nextProps.selectedCity!=this.state.selectedCity || 
            nextProps.selectedSort!=this.state.selectedSort){

          this.setState({
            selectedType:nextProps.selectedType,
            selectedCity:nextProps.selectedCity,
            selectedSort:nextProps.selectedSort
        }, this.getProperties);
        }
    }

    // Todo: Shift to Services.
    getProperties(){
        this.props.loader(true);
        this.setState({PropertyList:[], error:null, isLoaded: false,});
        fetch(process.env.REACT_APP_API_URL+"/api/properties?type="
            +this.state.selectedType+"&city="
            +this.state.selectedCity+"&sort="
            +this.state.selectedSort)
        .then(res => res.json())
        .then(
            (result) => {
                this.props.handler(result.filters)
                this.setState({
                    isLoaded: true,
                    PropertyList: result.properties.map(function(property){
                        return <PropertyItem property={property} key={property.id}/>;
                    })
                });

                this.props.loader(false);
            },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
        });
          this.setState({PropertyList:[]});
          this.props.loader(false);
      }
      )
    }

    componentDidMount() {
        this.getProperties();
    }

    render(){
        return (    
            <div className="container">
            {this.state.error == null && (this.state.PropertyList.length == 0 && 
                this.state.isLoaded == true ? "No Results Found! Please change filter if you have applied any" : this.state.PropertyList) }
            {this.state.error !=null && this.state.isLoaded == true &&  "There is Error in Fetching Results.Please Try Again Later"}
            </div>
            );
        }

    }
export default PropretyWrapper;