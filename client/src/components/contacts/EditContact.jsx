import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';
import { useHistory, useParams, Link } from 'react-router-dom';

const EditContact = () => {
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.allContacts.contact);

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [desc, setDesc] = useState('');

    const updateNewContact = (e) => {
        e.preventDefault();

        const update_Contact = Object.assign(contact, {
            name: name,
            number: number,
            email: email,
            address: address,
            desc: desc
        });
        dispatch(updateContact(update_Contact));
        history.push('/');
    }

    useEffect(() => {
        if (contact != null) {
            setName(contact.name);
            setNumber(contact.number);
            setEmail(contact.email);
            setAddress(contact.address);
            setDesc(contact.desc);
        }
        dispatch(getContact(id));
    }, [contact]);

    return (
        <div align="center">
            <div className="p-0 col-lg-10 col-sm-12">
                <div className="card border-0 shadow">
                    <div className="card-header bg-primary text-light">
                        <Link style={{ float: 'right' }} to="/"><span className="btn btn-light btn-sm fa fa-home"></span></Link>
                        <center><b>Edit Contact</b></center>
                    </div>
                    <div className="p-2 card-body">
                        <div className="">
                            <form onSubmit={(e) => updateNewContact(e)}>
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
                                            <button className="btn btn-warning shadow btn-sm">Update</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditContact;
