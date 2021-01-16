import React from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

const ContactComp = ({singleContact: {_id, name, mobile_num, email}}) => {
    return (
        <>
            <tr key={_id+Date.now} id={_id+Date.now()}>
                <td className="text-right mr-0">
                    <div className="row">
                        <div style={{ display: 'none' }} id="checkBoxDiv" className="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                    
                                />
                                <label className="custom-control-label"></label>
                            </div>
                        </div>
                        <div className="col">
                            {/* <Link to={`/viewContact/${id}`}><Avatar className="shadow text-bolder" name={'Numan Ahmed'} size="35" round={true} /></Link> */}
                            <Link to={`/viewContact/${_id}`}><Avatar className="shadow text-bolder" name={name} size="35" round={true} /></Link>
                        </div>
                    </div>
                </td>
                <td className="text-left ml-0 text-nowrap">
                    {/* <Link to={`/viewContact/${_id}`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{name}</Link> */}
                    <Link to={`/viewContact/${_id}`} style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold' }}>{name}</Link>
                    <a href={`tel:${'number'}`} className="ml-3 btn btn-sm btn-success">
                        <i className="fa fa-phone"></i>
                    </a>
                </td>
                <td>{mobile_num}</td>
                <td>
                    <a style={{ textDecoration: 'none' }} href={`mailto:${'email'}`} className="text-dark">
                        {email}
                    </a>
                </td>
                <td className="actions">
                    {/* <Link to={`/contact/editContact/${id}`}> */}
                        <span className="material-icons mt-1 mr-3 text-warning">edit</span>
                    {/* </Link> */}
                </td>
                <td className="actions">
                    <span role="button" onClick="nnn" className="material-icons mr-3 text-danger">remove_circle</span>
                </td>
            </tr>
        </>
    )
}

export default ContactComp;
