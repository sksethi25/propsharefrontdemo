import React from 'react';


// icons
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ShowChartIcon from '@material-ui/icons/ShowChart';

// feature components
import Joinwaitlist from "./Features/Joinwaitlist";
import Fullyfunded from "./Features/Fullyfunded";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bg:{
    backgroundColor:"#2b7df7",
    paddingTop:"6px !important",
    paddingBottom:"6px !important"
  },
  ptop:{

  },
  ptop1:{
  },
  ptop2:{
    paddingRight:"30px"
  },
  c:{
    textAlign:"center"
  },
  d:{
    justifyContent:"center",
    paddingRight:"9px"
  }
}));

export default function PropertyList(props) {
    const {property} = props;
    let featured;
     const classes = useStyles();

    if(property.funding_status=="Join Waitlist"){
        featured = <Joinwaitlist />
    }else if(property.funding_status=="Fully Funded"){
         featured = <Fullyfunded />
    }


    return(
        <div className="row marb20">
            <div className="card">
                <div className="container-fluid">
                    <div className="row">

                        {/* Image Section */}
                        <div className="col-7 pad0" >
                            <img className="fit-image card-img-top" src={property.image} alt="Card image cap" />
                            {featured}
                        </div>


                        {/* Right section */}
                        <div className="col-5 pad0">
                            <div className="container-fluid">
                                {/* Price section */}
                                <div className="row border pad10">
                                    <div className="col-6 border-right ">
                                        <div className="row">
                                            <div className="col-1 pad0 font12 bold  ">{property.currency}</div>
                                            
                                            <div className="col-10">
                                                <div className="row">
                                                    <div className={"col-12 pad0 font12 bold " + classes.c}>{property.price}</div>
                                                    <div className={"col-12 pad0 font8 fontgrey "+ classes.c}>{property.price_metric}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="row" style={{marginLeft: -8}}>
                                            <div className={"col-12 pad0 font12 bold " + classes.c} >{property.space}</div>
                                            <div className={"col-12 pad0  font8 fontgrey "+ classes.c}>{property.space_metric}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                 <div className="row  pad10" >
                                    <div className="col">
                                        <div className="row">
                                            <div className="col-1 pad0 font12 bold padt2"><LocationOnIcon fontSize="inherit" /></div>
                                            <div className="col-10">
                                                <div className="row">
                                                    <div className={"col-12 pad0 font12 bold " + classes.c}>{property.name}</div>
                                                    <div className={"col-12 pad0 font10 fontgrey " + classes.c}>
                                                        {property.address}

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Meta section */}
                                <div className="row bggrey bottom-fixed padl10">
                                        <div className="col-4 font8">
                                            <div className={"row font12 bold fontblue " + classes.d}>{property.funding}</div>
                                            <div className="row font  font8">Funded</div>
                                        </div>
                                        <div className="col-4 font8">
                                            <div className={"row font12 bold fontblue " + classes.d}>{property.investors}</div>
                                            <div className="row font  font8">Investors</div>
                                        </div>
                                        <div className="col-4 font8">
                                            <div className={"row font12 bold fontblue " + classes.d}>{property.days_left}</div>
                                            <div className="row font  font8">Day to go</div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div className= {"card-footer  fontwhite " + classes.bg}>
                    <div className="row padl10">
                        <div className="col">
                            <div className="row">
                                <div className={"col-1 pad0 padt4 font12 bold " +classes.ptop } ><AccountBalanceWalletIcon /></div>
                                <div className="col-2 pad0 font12 bold ">&nbsp;</div>
                                <div className="col-8">
                                    <div className="row">
                                        <div className={"col-12 pad0 font10  " + classes.ptop1}>Rental Yield</div>
                                        <div className="col-12 pad0 font12  bold" >{property.rental_yield}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col" >
                            <div className="row">
                                <div className={"col-1 pad0 padt4 font12 bold " +classes.ptop } ><ShowChartIcon /></div>
                                <div className="col-2 pad0 font8 bold ">&nbsp;</div>
                                <div className="col-8">
                                    <div className="row">
                                        <div className={"col-12 pad0 font10  " + classes.ptop} >Return Target</div>
                                        <div className="col-12 pad0 font12 bold ">{property.return_target}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className={"col-1 pad0 padt4 font12 bold padt2 " +classes.ptop } ><AccountBalanceIcon /></div>
                                <div className="col-2 pad0 font8 bold ">&nbsp;</div>
                                <div className="col-8">
                                    <div className="row">
                                        <div className={"col-12 pad0 font10  " + classes.ptop1}>Minimum Inv.</div>
                                        <div className="col-12 pad0 font12 bold ">{property.min_investment}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}