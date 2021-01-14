import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles/App.scss';

//Importing Components
import NavBar from './components/elements/NavBar';
import Contacts from './components/contacts/Contacts';

import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact';
import ViewContact from './components/contacts/ViewContact';

function App() {

    const [allContacts, setAllContacts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/get_contacts/')
            .then(res => res.json())
            .then(data => {
                setAllContacts(data);
            });
    }, []);

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
                                        <Contacts
                                            allContacts={allContacts}
                                        />
                                    </Route>
                                    <Route exact path="/contact/add">
                                        <AddContact
                                            allContacts={allContacts}
                                        />
                                    </Route>
                                    <Route exact path="/contact/editContact/:id">
                                        <EditContact
                                            allContacts={allContacts}
                                        />
                                    </Route>
                                    <Route exact path="/viewContact/:id">
                                        <ViewContact
                                            allContacts={allContacts}
                                        />
                                    </Route>
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
