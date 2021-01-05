import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContact, updateContact } from '../../actions/contactActions';
import { useHistory, useParams, Link } from 'react-router-dom';

const ViewContact = () => {
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
            <div className="col-lg-4 col-sm-12 p-0">
                <div className="col-sm-12 p-0" align="center">
                    <div className="card border-0 shadow">
                        <div className="card-header bg-primary text-light">
                            <Link style={{ float: 'right' }} to="/"><span className="btn btn-light btn-sm fa fa-home"></span></Link>
                            <b>{name}</b>
                        </div>
                        <div className="card-body">
                            <table>
                                <tr>
                                    <td>
                                        <a href={`tel:${number}`} className="btn btn-dark btn-sm"><span className="fa fa-phone"></span></a>
                                    </td>
                                    &nbsp; &nbsp; &nbsp;
                                    <td>{number}</td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <a href={`mailto:${email}`} className="btn btn-dark btn-sm"><span className="fa fa-envelope"></span></a>
                                    </td>
                                    &nbsp; &nbsp; &nbsp;
                                    <td>{email}</td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <a className="btn btn-dark btn-sm"><span className="fa fa-map-marker text-light"></span></a>
                                    </td>
                                    &nbsp; &nbsp; &nbsp;
                                    <td>{address}</td>
                                </tr>
                            </table>
                            <hr/>
                            <div>
                                {desc}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewContact;
