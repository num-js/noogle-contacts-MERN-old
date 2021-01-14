import React from 'react'
import ContactComp from './ContactComp';

const Contacts = ({allContacts}) => {

    

    return (
        <div>
            {/* {
                selectedContacts.length > 0 ? (
                    <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteSelectedContact())}> <span className="fa fa-trash"></span> Delete All </button>
                ) : null
            } */}
            <div align="center">
                <div className="col-lg-10 p-0">
                    <table className="contactTable p-0 table table-responsive-sm table-center text-center table-hover table-striped shadow">
                        <thead className="bg-primary text-white shadow">
                            <tr>
                                {/* <th colSpan="2">
                                    <div className="row">
                                        <div align="left" className="ml-3">
                                            <div className="custom-control custom-checkbox">
                                                <input id="selectAll" type="checkbox" className="custom-control-input"
                                                    value={selectAll}
                                                    onClick={() => setSelectAll(!selectAll)}
                                                />
                                                <label htmlFor="selectAll" className="custom-control-label"></label>
                                            </div>
                                        </div>
                                        <div className="ml-5">
                                            Name
                                        </div>
                                    </div>
                                </th> */}
                                <th colSpan="2">Name</th>
                                <th>Mobile No</th>
                                <th>Email</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allContacts.map((singleContact) => (
                                    <ContactComp
                                        singleContact={singleContact}
                                        key={singleContact._id}
                                    // selectAll={selectAll}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Contacts;
