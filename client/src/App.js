import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import NavBar from './components/elements/NavBar';
import Axios from 'axios';
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Numan'
        }
    }

    componentDidMount =  () => {
        Axios.get('http://localhost:5000/api/get_contacts/')
        .then(res => {

            console.log(res)
        })
            
    }

    render() {
        return (
            <>
                <Router>
                    <div className="App">
                        <NavBar />
                        <div className="container">
                            <div className="py-3">
                                <br />
                                <div>
                                    <Switch>
                                        <Route exact path="/">
                                            <Contacts name={this.state.name} />
                                        </Route>
                                        {/* <Route exact path="/contact/add" component={AddContact} />
                                        <Route exact path="/contact/editContact/:id" component={EditContact} />
                                        <Route exact path="/viewContact/:id" component={ViewContact} /> */}
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </>
        );
    }
}