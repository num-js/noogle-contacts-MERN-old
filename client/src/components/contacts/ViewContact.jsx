import React, { useState, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

const ViewContact = () => {
    return (
        <div align="center">
            <div className="col-lg-4 col-sm-12 p-0">
                <div className="col-sm-12 p-0" align="center">
                    <div className="card border-0 shadow">
                        <div className="card-header bg-primary text-light">
                            <Link style={{ float: 'right' }} to="/"><span className="btn btn-light btn-sm fa fa-home"></span></Link>
                            <b>Numan</b>
                        </div>
                        <div className="card-body">
                            <table>
                                <tr>
                                    <td>
                                        <a href={`tel:${'number'}`} className="btn btn-dark btn-sm"><span className="fa fa-phone"></span></a>
                                    </td>
                                    &nbsp; &nbsp; &nbsp;
                                    <td>7001959252</td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <a href={`mailto:${'email'}`} className="btn btn-dark btn-sm"><span className="fa fa-envelope"></span></a>
                                    </td>
                                    &nbsp; &nbsp; &nbsp;
                                    <td>nnnn</td>
                                </tr>
                                <br />
                                <tr>
                                    <td>
                                        <a className="btn btn-dark btn-sm"><span className="fa fa-map-marker text-light"></span></a>
                                    </td>
                                    &nbsp; &nbsp; &nbsp;
                                    <td>Klkta</td>
                                </tr>
                            </table>
                            <hr/>
                            <div>
                                Full Stack
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewContact;
