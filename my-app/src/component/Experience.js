import React, {Component} from 'react';
import '../css/experience.css';

export default class Experience extends Component{
    render(){
        return(
            <div id="experience" style={{backgroundColor:'#f1f1f1', paddingBottom:'17px'}} data-aos="fade-up"><br/>
                <h2 style={{textAlign:'center'}}>EXPERIENCE</h2>
                <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
                <div className="timeline"  data-aos="fade-up">
                    <div className="container-exp left">
                        <div className="content scbox">
                            <h2 style={{color:'#0072AA'}}>Afghanistan Embassy in Kuwait</h2>
                            <h6>IT Specialist (June 2020 - December 2019)</h6>
                            <p style={{lineHeight:'2.0'}}>Taking care of IT services at the Embassy. Keeping systems upto date, taking care of internal network.</p>
                        </div>
                    </div>
                    <div className="container-exp right">
                        <div className="content tmbox">
                            <h2 style={{color:'#6d6e70'}}>Afghanistan <span style={{color:'#e31837'}}>Telecom</span></h2>
                            <h6>Intern (January 2014 - March 2014)</h6>
                            <p style={{lineHeight:'2.0'}}>I did an internship as IT Engineer, where I was trained to repair and provide internet services.</p>
                        </div>
                    </div>
                    <div className="container-exp left">
                        <div className="content iotbox">
                        <h2 style={{color:'#44a4ee'}}>Afghanistan Investment Support Agency (AISA)</h2>
                        <h6>(October 2013 - December 2013)</h6>
                        <p style={{lineHeight:'2.0'}}>I was part of Promotion department where I would promote exhibitions and design the program and prepare meetings with foreign companies.</p>
                    </div>
                </div>
                </div>
            </div>    
        );
    }
}