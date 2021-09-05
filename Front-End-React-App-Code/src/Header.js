
import logo from './logo.svg';
import './App.css';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },    
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));

export function Header(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        named_trees: false,
        un_named_trees: false,
        trees_named_by_me: false,
        trees_named_by_user: false,
      });

      const [customerName, setCustomerName] = React.useState('');

      const [customerNames, setCustomerNames] = React.useState([]);
     
      const handleChange = (event) => {
        //setState({ ...state, [event.target.name]: event.target.checked });

        if(event.target.name == "un_named_trees" && event.target.checked == true) {
            props.myFunc("get_tree_info_un_named_page_true");
            setState({named_trees:false, un_named_trees:true,trees_named_by_me:false, trees_named_by_user:false});
        }

        if(event.target.name == "un_named_trees" && event.target.checked == false) {
            props.myFunc("get_tree_info_un_named_page_false");
            setState({named_trees:false, un_named_trees:false,trees_named_by_me:false, trees_named_by_user:false});
        }

        if(event.target.name == "named_trees" && event.target.checked == true) {
            props.myFunc("get_tree_info_named_page_true");
            setState({named_trees:true, un_named_trees:false,trees_named_by_me:false, trees_named_by_user:false});
        }

        if(event.target.name == "named_trees" && event.target.checked == false) {
            props.myFunc("get_tree_info_named_page_false");
            setState({named_trees:false, un_named_trees:false,trees_named_by_me:false, trees_named_by_user:false});
        }        

        if(event.target.name == "trees_named_by_me" && event.target.checked == true) {
            props.myFunc("get_trees_named_by_me_true");
            setState({named_trees:false, un_named_trees:false,trees_named_by_me:true, trees_named_by_user:false});
        }

        if(event.target.name == "trees_named_by_me" && event.target.checked == false) {
            props.myFunc("get_trees_named_by_me_false");
            setState({named_trees:false, un_named_trees:false,trees_named_by_me:false, trees_named_by_user:false});
        }

        if(event.target.name == "trees_named_by_user" && event.target.checked == true) {
            props.myFunc("get_trees_named_by_user_true");
            setState({named_trees:false, un_named_trees:false,trees_named_by_me:false, trees_named_by_user:true});
        }

        if(event.target.name == "trees_named_by_user" && event.target.checked == false) {
            props.myFunc("get_trees_named_by_user_false");
            setState({named_trees:false, un_named_trees:false,trees_named_by_me:false, trees_named_by_user:false});
            setCustomerName("")
        }

      };

      const handleCustomerNameChange = (event) => {
        props.myFunc("get_trees_named_by_customer", event.target.value)
        setCustomerName(event.target.value);
      }

      useEffect(() => {
        fetchCustomerNames();
      }, []);

    function getDataFromArrays (array) {
        let rows = []
        for(let i = 0 ;i < array.length; i++) {
          let element = array[i];
    
          let customer_name = element[0];
          rows.push(customer_name);
    
        }
        return rows;
    }

    async function fetchCustomerNames() {

        let url = 'https://k5tkgu2caj.execute-api.us-west-2.amazonaws.com/Dev';
        fetch(url)
            .then(response => response.json())
            .then(data => {
              console.log(data.result)
              let array = JSON.parse(data.result);
              let rows = getDataFromArrays(array);
              setCustomerNames(rows);
        } )    
    }

    function renderDropDown() {
        
        //await fetchCustomerNames();

        if(state.trees_named_by_user == true) {
            return (
                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">Customer Name</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={customerName}
                        onChange={handleCustomerNameChange}
                    >
                        {customerNames.map((customer_name, index) =>
                            <MenuItem key={index} value={customer_name}>{customer_name}</MenuItem>
                        )}

                    </Select>
                </FormControl>); 
        }
    }

  return (

    <Card className={classes.root}>
      <CardContent>
        <div class="grid grid-flow-col grid-rows-2 grid-cols-2 gap-4">
                <div>
                    <FormControlLabel
                            control={<Checkbox checked={state.named_trees} onChange={handleChange} name="named_trees" />}
                            label="Show Named Trees"
                        />
                </div>
                <div>
                    <FormControlLabel
                            control={<Checkbox checked={state.un_named_trees} onChange={handleChange} name="un_named_trees" />}
                            label="Show Un-named Trees"
                        />
                </div>
                <div>
                    <FormControlLabel
                            control={<Checkbox checked={state.trees_named_by_me} onChange={handleChange} name="trees_named_by_me" />}
                            label="Show Trees named by me"
                        />
                </div>
                <div>
                    <FormControlLabel
                            control={<Checkbox checked={state.trees_named_by_user} onChange={handleChange} name="trees_named_by_user" />}
                            label="Show Trees named by Customer"
                        />
                    {renderDropDown()}
                </div>

            </div>
      </CardContent>
    </Card>
    );
}

export default Header;
