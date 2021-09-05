
import logo from './logo.svg';
import './App.css';
import {Header} from './Header'
import {Body} from './Body'
import React from 'react'
import { useState, useEffect } from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import {LoginButton} from './LoginButton'
import { useAuth0 } from "@auth0/auth0-react";
import {LogoutButton} from './LogoutButton'

function App() {
  const [state, setState] = React.useState({
    named_trees: true,
    un_named_trees: true,
    trees_named_by_me: true,
    trees_named_by_user: true,
    customer_name:"",
    logged_in_user_name:""
  });

  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    console.log("app.js")
    // if(isAuthenticated) { 
    //   setLoggedInUserNameInState(user.nickname)
    // }
  });


  function callHeadMethod(methodName, customerName) {

    if("get_tree_info_un_named_page_true" == methodName) {
      setState({named_trees:false, un_named_trees:true, trees_named_by_me:false, trees_named_by_user:false, customer_name:"" });
    }

    if("get_tree_info_un_named_page_false" == methodName) {
      setState({named_trees:false, un_named_trees:false, trees_named_by_me:false, trees_named_by_user:false, customer_name:"" });
    }

    if("get_tree_info_named_page_true" == methodName) {
      setState({named_trees:true, un_named_trees:false, trees_named_by_me:false, trees_named_by_user:false, customer_name:"" });
    }

    if("get_tree_info_named_page_false" == methodName) {
      setState({named_trees:false, un_named_trees:false, trees_named_by_me:false, trees_named_by_user:false, customer_name:"" });
    }  
  
    if("get_tree_info_by_user_named_page_true" == methodName) {
      setState({named_trees:false, un_named_trees:false, trees_named_by_me:false, trees_named_by_user:true, customer_name:"" });
    }
  
    if("get_tree_info_by_user_named_page_false" == methodName) {
      setState({named_trees:false, un_named_trees:false, trees_named_by_me:false, trees_named_by_user:false, customer_name:"" });
    }
  
    if("get_trees_named_by_me_true" == methodName) {
      setState({named_trees:false, un_named_trees:false, trees_named_by_me:true, trees_named_by_user:false, customer_name:"" });
    }

    if("get_trees_named_by_me_false" == methodName) {
      setState({named_trees:false, un_named_trees:false, trees_named_by_me:false, trees_named_by_user:false, customer_name:"" });
    }

    if("get_trees_named_by_customer" == methodName) {
      setState({named_trees:false, un_named_trees:false, trees_named_by_me:false, trees_named_by_user:true, customer_name:customerName });
    }

  }

  async function addLoggedInUserName(customer_name) {

    if(state.logged_in_user_name != customer_name) {
      let newState = Object.assign({}, state);
      newState.logged_in_user_name = customer_name;
  
      setState(newState)
  
    }

    let url = 'https://0oua10pc4j.execute-api.us-west-2.amazonaws.com/Dev?customer_name=';
    url = url + customer_name;

    fetch(url)
        .then(response => response.json())
        .then(data => {
          console.log(data.result)
    } )    
  }

  function setLoggedInUserNameInState(nickname) {
    console.log(nickname)

  }

  if(isAuthenticated) {

    console.log(user)

    {addLoggedInUserName(user.nickname)}

    return (<div  className="flex justify-center">

          <table>
            <tr><LogoutButton></LogoutButton></tr>
            <tr>
              <Header
                myFunc={callHeadMethod}      
              ></Header>
            </tr>
            <tr>
              <Body
                myProp={state}
                key={state.named_trees.toString().concat(state.un_named_trees.toString()).concat(state.trees_named_by_me.toString()).concat(state.trees_named_by_user.toString()).concat(state.customer_name.toString())}
              ></Body>
            </tr>
        </table>
      </div>)
  } else {
    return (<div className="flex justify-center"><LoginButton></LoginButton></div>)
  }
}

export default App;
