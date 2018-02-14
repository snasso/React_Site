import React, { Component } from 'react';
import '../App.css';


class Footer extends Component {
    render() {
        return (
            <footer className="page-footer blue" style={{"borderTop": "1px solid lightgrey"}}>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <h5 className="white-text">[Contact]</h5>
                            <ul>
                                <li><a className="white-text" href="#!">[Address]</a></li>
                                <li><a className="white-text" href="#!">[Phone]</a></li>
                                <li><a className="white-text" href="#!">[Email]</a></li>
                                <li><a className="white-text" href="#!">[Web Link]</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container" style={{"textAlign": "center"}}>
                        Copyright &copy; 2018 [Company Name]
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;