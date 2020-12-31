import React, {Component} from 'react';
import '../css/footer.css';

export default class Footer extends Component{
    render(){
        return(
            <div id="footer" style={{backgroundColor:'#f1f1f1', paddingBottom:'17px'}}><br/>
                <i className="fa fa-copyright footerCR" aria-hidden="true" style={{marginLeft:'25px',position:'absolute'}}> 2020<strong> Sher Shah Arsalaie</strong>. All Rights Reserved</i>
               
            </div>
        );
    }
}