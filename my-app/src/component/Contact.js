import React, {Component} from 'react';
import '../css/contact.css';

export default class Contact extends Component{
    render(){
        return(
            <div id="contact" style={{paddingBottom:'17px'}} data-aos="fade-up"><br/>
                <h2 style={{textAlign:'center'}}>CONTACT ME</h2>
                <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
                <div className="container icons">
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="https://www.linkedin.com/in/sher-shah-arsalaie-1538061a4/" target="_blank"><i className="fa fa-2x fa-linkedin-square"></i></a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://github.com/arsala1995" target="_blank"><i className="fa fa-2x fa-github"></i></a>
                        </li>            
                        <li className="list-inline-item">
                            <a href="mailto: shershah.arsalaie@hotmail.com" target="_blank"><i className="fa fa-2x fa-envelope"></i></a>
                        </li>
                    
                    </ul>
                </div>
            </div>
        );
    }
}