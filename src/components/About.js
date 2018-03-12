import React, { Component } from 'react';
import FellowView from './FellowView'

class About extends Component {
    constructor(){
        super()
        this.state = {
            team: [
                {
                    'name': 'Scott Sheppard',
                    'avatar': 'https://avatars3.githubusercontent.com/u/7772230?s=200&v=4',
                    'linkedIn': 'wscottsh',
                    'github': 'wScottSh'
                },
                {
                    'name': 'Jake Chavez',
                    'avatar': 'https://avatars1.githubusercontent.com/u/32828225?s=200&v=4'
                }
            ]       
        }
    }
    render() {
        let cohort = this.state.team.map((fellow) => {
            return (
                <FellowView 
                    fellowName = { fellow.name }
                    avatar = { fellow.avatar }
                    linkedIn = { fellow.linkedIn }
                    github = { fellow.github }
                />
            )
        })
    // let team = cohort.map( (member) => {
    //   return (

    //   )
    // })
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-sm-6 mb-4'>
                        <h1 className='my-4'>Hello, my name is Neo.</h1>
                        <p>I’m a web developer and a code cobbler from Austin.
                        In my past life, I’ve executed performance data analytics in electronic health records (EHR), and conducted Biomedical research in ultrasound bubbles.</p>
                    </div>          
                    <div className='col-lg-4 col-sm-6 text-center mb-4'>
                        <img className='rounded-circle img-fluid d-block mx-auto' width='200px' src='images/profile02.jpeg' alt='Profile of Neo Jang' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h2 className='my-4'>The Team</h2>
                        <p>In December 2017, 13 strangers embarked on a journey that impact every member in the the most profound and wonderous ways that no one could have possibly anticipated.</p>
                    </div>
                    { cohort }
                    <div className='col-lg-4 col-sm-6 text-center mb-4'>
                        <img className='rounded-circle img-fluid d-block mx-auto' src='https://avatars3.githubusercontent.com/u/30993518?s=200&v=4' alt='' />
                        <h3>Lillian Chernin</h3>                        
                    </div>
                    <div className='col-lg-4 col-sm-6 text-center mb-4'>
                        <img className='rounded-circle img-fluid d-block mx-auto' src='https://avatars0.githubusercontent.com/u/32626323?s=200&v=4' alt='' />
                        <h3>Marcy Lina</h3>                        
                    </div>
                    <div className='col-lg-4 col-sm-6 text-center mb-4'>
                        <img className='rounded-circle img-fluid d-block mx-auto' src='https://avatars3.githubusercontent.com/u/33147725?s=200&v=4' alt='' />
                        <h3>Tess Craig</h3>                        
                    </div>
                    <div className='col-lg-4 col-sm-6 text-center mb-4'>
                        <img className='rounded-circle img-fluid d-block mx-auto' src='https://avatars2.githubusercontent.com/u/31356942?s=200&v=4' alt='' />
                        <h3>Chris Hanten</h3>                        
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
