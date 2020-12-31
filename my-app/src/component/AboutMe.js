import React, { Component} from 'react';
import '../css/Hero.css';
import '../css/aboutme.css';


export default class AboutMe extends Component{
    
    render(){
        return(
            // About BEGIN
            <div id="about" data-aos="fade-up" style={{backgroundColor:'#f1f1f1', paddingBottom:'17px'}}><br/>
                <h2 style={{textAlign:'center'}}>ABOUT ME</h2>
                <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
                <div className="container conatinerSmall">
                    <div className="card mb-3" data-aos="fade-up" >
                        <div className="row">
                           
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-text" style={{lineHeight:'2.0', textAlign:'left'}}>
                                        Hi! I'm Sher Shah Arsalaie, a web developer and Computer Engineer located in Vancouver, Canada. 
                                        Since stepping into the world of technology, I have been experimenting with various programming and engineering tools. 
                                        I pursued my <i>Bachelor's of Computer Engineering </i> at Kuwait University, Kuwait
                                        and at the same time worked as IT specialist at the Embassy of Afghanistan in Kuwait.
                                        <br/>I have recently received my diploma of Web development at <b style={{color:'#21AA47'}}>Lighthouse Labs.</b> For more information scroll down to my Resume.
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card mb-3 cardTable" data-aos="fade-up">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="card-body table-responsive">
                                <table className="table table-hover table-bordered">
                                    <tbody>
                                        <tr>
                                            <td><b>Degree</b></td>
                                            <td><b>Field</b></td>
                                            <td><b>Institute/University</b></td>
                                        </tr>
                                        <tr>
                                            <td>Bachelors</td>
                                            <td>Computer Engineering</td>
                                            <td>Kuwait University</td>
                                           
                                        </tr>
                                        <tr>
                                            <td>Diploma</td>
                                            <td>Web Development</td>
                                            <td>Lighthouse Labs</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-md-3">
                        <i className="card-img fa fa-university fa-5x"></i>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            // About END 
        );
    }
}