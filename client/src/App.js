import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.scss';

//Importing Components
import NavBar from './components/elements/NavBar';
import Contacts from './components/contacts/Contacts';

import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import ViewContact from './components/contacts/ViewContact';

function App() {
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
                                        <Route exact path="/" component={Contacts} />
                                        <Route exact path="/contact/add" component={AddContact} />
                                        <Route exact path="/contact/editContact/:id" component={ EditContact } />
                                        <Route exact path="/viewContact/:id" component={ ViewContact } />
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
        </>
    );
}

export default App;
