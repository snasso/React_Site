import React, { Component } from 'react';
import '../App.css';


class NavigationBar extends Component {
    render() {
        return (
            <nav className="blue">
                <div className="nav-wrapper">
                    {/* Modal Structure */}
                    <div id="modal1" className="modal" >
                        <h4 className="modalHeader">Modal Header</h4>
                        <a id="modalClose" href="#!" className="modal-action modal-close waves-effect waves-green btn-flat"><strong>X</strong></a>
                        <div className="modal-content" style={{"color": "rgb(0, 0, 0)"}}>
                            <table id="modalTable" className="centered">
                                <tbody>
                                    <tr>
                                        <td>Sunday</td>
                                        <td>closed</td>
                                    </tr>
                                    <tr>
                                        <td>Monday</td>
                                        <td>10:00 AM-6:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td>10:00 AM-8:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td>10:00 AM-8:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td>10:00 AM-8:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td>10:00 AM-8:00 PM</td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td>10:00 AM-8:00 PM</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <ul className="left hide-on-med-and-down">
                        <li><a href="#!">[Link 1]</a></li>
                        <li><a href="#!">[Link 2]</a></li>
                        {/* Modal Trigger */}
                        <li><a className="modal-trigger" href="#modal1">Modal</a></li>
                    </ul>

                    <ul className="right">
                        <li className="hide-on-med-and-down"><a href="#!">[Link 4]</a></li>
                        <li><a href="#!"><i className="fab fa-facebook"></i></a></li>
                        <li><a href="#!"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#!"><i className="fab fa-instagram"></i></a></li>
                    </ul>

                    <ul id="slide-out" className="sidenav blue">
                        <li><a href="#!">[Link 1]</a></li>
                        <li><a href="#!">[Link 2]</a></li>
                        {/* Modal Trigger */}
                        <li><a className="modal-trigger" href="#modal1">Modal</a></li>
                        <li><a href="#!">[Link 4]</a></li>
                    </ul>
                    <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        );
    }
}

export default NavigationBar;