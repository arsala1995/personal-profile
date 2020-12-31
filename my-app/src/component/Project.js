import React, {Component} from 'react';
import despoc from '../images/fixtreetimage.png';
import fixtreet from '../files/fixTreet.pdf';
import '../css/project.css';

export default class Project extends Component{
    render(){
        return(
            <div id="projects" style={{paddingBottom:'17px'}}  data-aos="fade-up"><br/>
                <h2 style={{textAlign:'center'}}>PROJECTS</h2>
                <hr style={{width:'8%', color:'#f05c21', backgroundColor:'#f05c21'}}></hr><br/>
                <div className="container">
                    {/* Published Project BEGIN */}
                    <div className="card mb-3" style={{borderColor:'#f3e909'}} >
                        <div className="row">
                            
                            <div className="col-md-8">
                                <div className="card-body">
                                   
                                <img src={despoc} className="card-img despocImage" alt="DeSPOC"/>
                                    <p className="card-text" style={{lineHeight:'2.0', textAlign:'middle', fontSize:"17px"}}>
                                    <i><b>This Project was a group project and was combination of Hardware and Software. Our group got second position for our project throughout Kuwait. </b></i><br/>
                                    Our project solves this problem of potholes using a system known as “Fixtreet” that
                                    aims to automatically detect and classify potholes using a camera operated by the
                                    driver. The system sends the severity level, picture, location, date and time of the
                                    pothole automatically to the database that is then accessed by the admin using a
                                    website. The admin, in turn, can take immediate actions in order to repair the
                                    potholes. Fixtreet provides a relatively simple yet effective and efficient method to
                                    get rid of potholes across the streets of Kuwait.
                                    To visit the website please click on <a href="https://fixtreet.web.app/#team "style={{color:'#21AA47'}}>FixTreet.</a> </p><br/>
                                    <a className="btn viewbtn rounded-pill shadow" href={fixtreet} target="_blank" style={{textDecoration:'none', width:'50%', marginTop:'68px'}}>
                                    <i className="fa fa-eye">&ensp;View Project</i>
                                </a>                       
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Published Project END */}

                    {/* Other Project BEGIN */}
                    <div className="card-deck">
                        <div className="card" style={{borderColor:'#f3e909'}} data-aos="fade-up">
                            {/* <img src="..." className="card-img-top" alt="..."/> */}
                            <div className="card-body">
                                <h5 className="card-title">ResumeX</h5>
                                <p className="card-text" style={{lineHeight:'2.0', textAlign:'justify', fontSize:"17px"}}>ResumeX is a website where you can upload your resume and desired job description and the website will recommend changes to match the job desciption or you can use job search to look for a job matching your resume. To try our app click on <a href="https://resumex2020.herokuapp.com "style={{color:'#21AA47'}}>ResumeX.</a> </p>
                                <a className="btn viewbtn rounded-pill shadow" href="https://github.com/arsala1995/final_project_LHL" target="_blank" style={{textDecoration:'none', width:'50%', marginTop:'68px'}}>
                                    <i className="fa fa-eye">&ensp;View</i>
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{borderColor:'#f3e909'}} data-aos="fade-up">
                            {/* <img src={facelock} className="card-img" alt="profile picture" style={{height:'100px', weight:'9px', paddingTop:'20px', marginTop:'30px',marginLeft:'25px'}}/> */}
                            <div className="card-body">
                                <h5 className="card-title">SneakerExchange</h5><br/>
                                <p className="card-text" style={{lineHeight:'2.0', textAlign:'justify', fontSize:"17px"}}>This app lets you sell or buy sneakers online. You can use filters to search for sneakers in your location or sizes. You can also upload sneakers by providing all the information regarding your sneakers, the buyer will contact you using email if he is interested and will be marked sold if the sneaker has been sold out.</p>
                                <a className="btn viewbtn rounded-pill shadow" href="https://github.com/arsala1995/sneaker-exchange" target="_blank" style={{textDecoration:'none', width:'50%'}}>
                                    <i className="fa fa-eye">&ensp;View</i>
                                </a>
                            </div>
                        </div>
                        <div className="card" style={{borderColor:'#f3e909'}} data-aos="fade-up">
                            {/* <img src="..." className="card-img-top" alt="..."/> */}
                            <div className="card-body">
                                <h5 className="card-title">Jungle</h5>
                                <p className="card-text" style={{lineHeight:'2.0', textAlign:'justify', fontSize:"17px"}}>Jungle is a platform where you can buy anything. Admin has the privilege of uploading and deleting items. So, the buyer can buy online using his/her credit card.</p>
                                <a className="btn viewbtn rounded-pill shadow" href="https://github.com/arsala1995/Jungle" target="_blank" style={{textDecoration:'none', width:'50%', marginTop:'102px'}}>
                                    <i className="fa fa-eye">&ensp;View</i>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Other Project END */}

                </div>

            </div>
        );
    }
}