import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactActions';
import { useHistory, Link } from 'react-router-dom';

const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [desc, setDesc] = useState('');

    const saveContact = (e) => {
        e.preventDefault();
        const newContact = {
            id: Date.now(),
            name: name,
            number: number,
            email: email,
            address: address,
            desc: desc
        }
        history.push('/');
    }

    return (
        <div align="center">
            <div className="p-0 col-lg-10 col-sm-12">
                <div className="p-0 col-sm-12" align="center">
                    <div className="card border-0 shadow">
                        <div className="card-header bg-primary text-light">
                            <Link style={{ float: 'right' }} to="/"><span className="btn btn-light btn-sm fa fa-home"></span></Link>
                            <b>Add New Contact</b>
                        </div>
                        <div className="p-2 col-sm-12 card-body">
                            <div className="">
                                <form onSubmit={(e) => saveContact(e)}>
                                    <div className="row">
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control shadow"
                                                    value={name}
                                                    placeholder="Name"
                                                    onChange={(e) => setName(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="number"
                                                    className="form-control shadow"
                                                    value={number}
                                                    placeholder="Number"
                                                    onChange={(e) => setNumber(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="email"
                                                    className="form-control shadow"
                                                    value={email}
                                                    placeholder="Email"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control shadow"
                                                    value={address}
                                                    placeholder="Address"
                                                    onChange={(e) => setAddress(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <div className="form-group">
                                                <textarea rows="6" type="text"
                                                    className="form-control"
                                                    value={desc}
                                                    placeholder="Description"
                                                    onChange={(e) => setDesc(e.target.value)} >
                                                </textarea>
                                            </div>
                                            <div className="form-group col-lg-12">
                                                <button className="btn btn-primary shadow btn-sm">Save</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddContact;
