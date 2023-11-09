
import React from 'react';
import Check from '/image/check.png';
import Percent from '/image/percentage.png';
import Rotate from '/image/rotate.png';
import Table from 'react-bootstrap/Table';








function ghome(){

  const percentage = 80;
 
  const divStyle = {
    backgroundColor: '#f5f5f5',
    width: '100%',
    height: '100%',
    position: 'absolute',
    color: 'white'
  };
  const barStyle = {
    width: `${percentage}%`,
    height: '10px',
    backgroundColor: '#b16fef', 
    borderRadius: '5px',
    transition: 'width 0.5s ease-in-out', 
  };
  


 
 
   
      
        
    return(
      
      <div className="black-background" style={divStyle}>
      <card style={{width: '1260px', height: '150px', backgroundColor: 'white', position: 'absolute', top: '20px',left: '20px',borderRadius: '20px'}}>
       <cardbody>
       <div style={{ position: 'absolute',width: '2px', height: '60%', backgroundColor: '#f5f5f5', left: '320px' , top: '40px'}}>
       </div>
       <div style={{ position: 'absolute',width: '2px', height: '60%', backgroundColor: '#f5f5f5', left: '640px' , top: '40px'}}></div>
       <div style={{ position: 'absolute',width: '2px', height: '60%', backgroundColor: '#f5f5f5', left: '940px' , top: '40px'}}></div>
       <div style={{ width: '100%', height: '8px', position: 'absolute', top: '10px'  }}>
      <div style={{ width: '60%', height: '100%', backgroundColor: '#b16fef', float: 'left',borderRadius: '50px',left: '20px' , position: 'absolute'}}></div>
      <div style={{ width: '40%', height: '100%', backgroundColor: '#f5f5f5', float: 'left',borderRadius: '50px',right: '20px',position: 'absolute' }}></div>
    </div>

    <img src={Check}  style={{top: '65px', color: 'black',position: 'absolute',left: '130px', width: '50px',height: '50px'}}/>

    <h4 style={{top: '30px', color: 'black',position: 'absolute',left: '115px', fontSize: '28px',fontFamily: 'Garamond'}}>Planing</h4>
    <h4 style={{top: '120px', color: 'black',position: 'absolute',left: '120px',fontFamily: 'Garamond', fontSize: '15px'}}>Completed</h4>
    <img src={Check}  style={{top: '65px', color: 'black',position: 'absolute',left: '450px', width: '50px',height: '50px'}}/>

    <h4 style={{top: '30px', color: 'black',position: 'absolute',left: '430px', fontSize: '28px',fontFamily: 'Garamond'}}>Planing</h4>
    <h4 style={{top: '120px', color: 'black',position: 'absolute',left: '435px',fontFamily: 'Garamond', fontSize: '15px'}}>Completed</h4>
    <img src={Percent}  style={{top: '65px', color: 'black',position: 'absolute',left: '760px', width: '50px',height: '50px'}}/>

    <h4 style={{top: '30px', color: 'black',position: 'absolute',left: '745px', fontSize: '28px',fontFamily: 'Garamond'}}>Planing</h4>
    <h4 style={{top: '120px', color: 'black',position: 'absolute',left: '750px',fontFamily: 'Garamond', fontSize: '15px'}}>Completed</h4>
    <img src={Rotate}  style={{top: '65px', color: 'black',position: 'absolute',left: '1065px', width: '50px',height: '50px'}}/>

    <h4 style={{top: '30px', color: 'black',position: 'absolute',left: '1050px', fontSize: '28px',fontFamily: 'Garamond'}}>Planing</h4>
    <h4 style={{top: '120px', color: 'black',position: 'absolute',left: '1055px',fontFamily: 'Garamond', fontSize: '15px'}}>Completed</h4>
       </cardbody>
      </card>


      <card style={{width: '220px', height: '150px', backgroundColor: 'white', position: 'absolute', top: '20px', right: '20px',borderRadius: '20px'}}>
       <cardbody>
       <h4 style={{top: '30px', color: 'black',position: 'absolute',left: '80px',fontFamily: 'Garamond', fontSize: '25px'}}>Project </h4>
       <h4 style={{top: '60px', color: 'black',position: 'absolute',left: '50px',fontFamily: 'Garamond', fontSize: '25px'}}> Louanch Date</h4>
       <h4 style={{top: '100px', color: 'black',position: 'absolute',left: '85px',fontFamily: 'Garamond', fontSize: '18px'}}>112 Days</h4>
       <h4 style={{top: '120px', color: 'black',position: 'absolute',left: '70px',fontFamily: 'Garamond', fontSize: '13px'}}>Fridey,December 15</h4>
       </cardbody>
      </card>



      <card style={{width: '740px', height: '260px', backgroundColor: 'white', position: 'absolute', top: '180px',left: '20px',borderRadius: '20px'}}>
       <cardbody>
        <h2 style={{color: 'black', left: '280px',position: 'absolute', fontSize: '25px',top: '10px', fontFamily: 'arial narrow bold'}}>Project Budget</h2>
        <div style={{ width: '60%', height: '4px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '65px'}}></div>
        <div style={{ width: '60%', height: '2px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '80px'}}></div>
        <div style={{ width: '60%', height: '4px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '95px'}}></div>
        <div style={{ width: '60%', height: '2px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '110px'}}></div>
        <div style={{ width: '60%', height: '4px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '125px'}}></div>
        <div style={{ width: '60%', height: '2px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '140px'}}></div>
        <div style={{ width: '60%', height: '4px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '155px'}}></div>
        <div style={{ width: '60%', height: '2px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '170px'}}></div>
        <div style={{ width: '60%', height: '4px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '185px'}}></div>
        <div style={{ width: '60%', height: '2px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '200px'}}></div>
          

          <div style={{display: 'flex'}}>
        <div style={{width: '80px',
                     height: '100px',
                     
                     position: 'absolute',
                     top: '101px',
                     left: '80px',
                     backgroundColor: '#b16fef'}}></div>

<div style={{width: '80px',
                     height: '50px',
                     backgroundColor: 'white',
                     position: 'absolute',
                     top: '150px',
                     left: '225px',
                     backgroundColor: 'blue'}}></div>

<div style={{width: '80px',
                     height: '70px',
                     backgroundColor: 'white',
                     position: 'absolute',
                     top: '131px',
                     left: '380px',
                     backgroundColor: '#0D7CF3'}}></div>


     <cardText style={{ color: 'black',left: '80px', top: '205px', position: 'absolute', fontFamily: 'arial narrow bold'}}>Catergory01</cardText>
     <cardText style={{ color: 'black',left: '220px', top: '205px', position: 'absolute', fontFamily: 'arial narrow bold'}}>Catergory02</cardText>
     <cardText style={{ color: 'black',left: '380px', top: '205px', position: 'absolute', fontFamily:'arial narrow bold'}}>Catergory03</cardText>
     </div>


    <div style={{display: 'flex'}}>
     <cardText style={{ color: 'black',left: '530px', top: '80px', position: 'absolute',fontFamily:'arial narrow bold'}}>Total Budget</cardText>
     <cardText style={{ color: 'black',left: '630px', top: '80px', position: 'absolute',fontSize:'15px'}}>$52,000</cardText>
     </div>

     <div style={{display: 'flex'}}>
     <cardText style={{ color: 'black',left: '530px', top: '110px', position: 'absolute',fontFamily: 'arial narrow bold'}}>Remaining</cardText>
     <cardText style={{ color: 'black',left: '630px', top: '110px', position: 'absolute',fontSize: '15px'}}>$8,000</cardText>
     </div>

     <div style={{display: 'flex'}}>
     <cardText style={{ color: 'black',left: '530px', top: '140px', position: 'absolute', fontFamily:'arial narrow bold'}}>Currently</cardText>
     <cardText style={{ color: '#b16fef',left: '630px', top: '140px', position: 'absolute',fontSize: '15px'}}>8.1%</cardText>
     </div>

     <cardText style={{ color: '#b16fef',left: '600px',position: 'absolute',top: '200px',fontFamily:'arial narrow bold'}}>(Over Target)</cardText>

 
     
    
     <cardText style={{   left: '40px' , position: 'absolute',top: '60px', color: 'black', fontSize: '10px'}}>100</cardText>
        < cardText style={{  left: '45px' , position: 'absolute',top: '75px', color: 'black', fontSize: '10px'}}>80</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '90px', color: 'black',fontSize: '10px'}}>60</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '105px',color: 'black',fontSize: '10px'}}>40</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '118px',color: 'black',fontSize: '10px'}}>30</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '135px', color: 'black', fontSize:'10px'}}>25</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '150px', color: 'black', fontSize:'10px' }}>20</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '165px', color: 'black', fontSize:'10px'}}>15</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '180px', color: 'black', fontSize:'10px'}}>10</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '195px', color: 'black', fontSize:'10px'}}>0</cardText>
       </cardbody>
      </card>




      <card style={{width: '740px', height: '260px', backgroundColor: 'white', position: 'absolute', top: '180px', right: '20px',borderRadius: '20px'}}>
       <cardbody>
       <h2 style={{color: 'black', left: '320px',position: 'absolute', fontSize: '25px',top: '10px',fontFamily: 'arial narrow bold'}}>Overdue</h2>

      <div style={{position: 'absolute', top: '50px',left: '80px', width:'600px', height: '200px'}}>
       <Table striped bordered hover size="sm">

      <thead>
        <tr >
          <th style={{backgroundColor: '#b16fef',color: 'white'}}>Overdue</th>
          <th style={{backgroundColor: '#b16fef',color: 'white'}}>Task</th>
          <th style={{backgroundColor: '#b16fef',color: 'white'}}>Deadline</th>
          <th style={{backgroundColor: '#b16fef',color: 'white'}}>Employee</th>
        </tr>
      </thead>

      <tbody >

        <tr >
          <td  style={{backgroundColor: '#f5f5f5',color: 'black'}}>1 day</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>Update Facebook profile</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>2017-08-15</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>Paula</td>
        </tr>
        <tr>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>4 Days</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>Update testing plan</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>2017-08-06</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>kate</td>
        </tr>
        <tr>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>10 Days</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>Configure desktop</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>2017-08-01</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>Nancy</td>
        </tr>

        <tr>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>24 Days</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>Set up new database</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>2017-08-18</td>
          <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>Georg</td>
        </tr>
     
      </tbody>

    </Table>
    </div>
       </cardbody>
      </card>




      <card style={{width: '740px', height: '260px', backgroundColor: 'white', position: 'absolute', top: '450px',left: '20px',borderRadius: '20px'}}>
       <cardbody>

       <h2 style={{color: 'black', left: '300px',position: 'absolute', fontSize: '25px',top: '10px',fontFamily: 'arial narrow bold'}}>Workload</h2>
        <div style={{ width: '80%', height: '4px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '65px'}}></div>
        <div style={{ width: '80%', height: '2px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '80px'}}></div>
        <div style={{ width: '80%', height: '4px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '95px'}}></div>
       <div style={{ width: '80%', height: '2px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '110px'}}></div>
        <div style={{ width: '80%', height: '4px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '125px'}}></div>
        <div style={{ width: '80%', height: '2px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '140px'}}></div>
        <div style={{ width: '80%', height: '4px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '155px'}}></div>
        <div style={{ width: '80%', height: '2px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '170px'}}></div>
        <div style={{ width: '80%', height: '4px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '185px'}}></div>
        <div style={{ width: '80%', height: '2px', backgroundColor: '#f5f5f5', float: 'left',left: '60px' , position: 'absolute',top: '200px'}}></div>
          

        <div style={{display: 'flex'}}>
        <div style={{width: '40px',
                     height: '100px',
                     
                     position: 'absolute',
                     top: '101px',
                     left: '80px',
                     backgroundColor: '#444A51'}}></div>

        <div style={{width: '40px',
                     height: '50px',
                     backgroundColor: 'white',
                     position: 'absolute',
                     top: '150px',
                     left: '180px',
                     backgroundColor: '#444A51'}}></div>

        <div style={{width: '40px',
                     height: '70px',
                     backgroundColor: 'white',
                     position: 'absolute',
                     top: '131px',
                     left: '290px',
                     backgroundColor: '#444A51'}}></div>

        <div style={{width: '40px',
                     height: '70px',
                     backgroundColor: 'white',
                     position: 'absolute',
                     top: '131px',
                     left: '410px',
                     backgroundColor: '#444A51'}}></div>

        <div style={{width: '40px',
                     height: '70px',
                     backgroundColor: 'white',
                     position: 'absolute',
                     top: '131px',
                     left: '530px',
                     backgroundColor: '#444A51'}}></div>


     <cardText style={{ color: 'black',left: '70px', top: '205px', position: 'absolute',fontFamily: 'arial narrow bold'}}>Georg</cardText>
     <cardText style={{ color: 'black',left: '180px', top: '205px', position: 'absolute',fontFamily:'arial narrow bold'}}>Nancy</cardText>
     <cardText style={{ color: 'black',left: '290px', top: '205px', position: 'absolute',fontFamily:'arial narrow bold'}}>Richard</cardText>
     <cardText style={{ color: 'black',left: '410px', top: '205px', position: 'absolute'}}>Kate</cardText>
     <cardText style={{ color: 'black',left: '530px', top: '205px', position: 'absolute',fontFamily:'arial narrow bold'}}>Paula</cardText>
     </div>


        <cardText style={{   left: '40px' , position: 'absolute',top: '60px', color: 'black', fontSize: '10px'}}>100</cardText>
        < cardText style={{  left: '45px' , position: 'absolute',top: '75px', color: 'black', fontSize: '10px'}}>80</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '90px', color: 'black',fontSize: '10px'}}>60</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '105px',color: 'black',fontSize: '10px'}}>40</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '118px',color: 'black',fontSize: '10px'}}>30</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '135px', color: 'black', fontSize:'10px'}}>25</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '150px', color: 'black', fontSize:'10px' }}>20</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '165px', color: 'black', fontSize:'10px'}}>15</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '180px', color: 'black', fontSize:'10px'}}>10</cardText>
        <cardText style={{  left: '45px' , position: 'absolute',top: '195px', color: 'black', fontSize:'10px'}}>0</cardText>
       </cardbody>
      </card>




      <card style={{width: '740px', height: '260px', backgroundColor: 'white', position: 'absolute', top: '450px', right: '20px',borderRadius: '20px'}}>
       <cardbody>
       <h2 style={{color: 'black', left: '260px',position: 'absolute', fontSize: '25px',top: '10px',fontFamily:'arial narrow bold'}}>Upcomming Deadline</h2>


  <div style={{position: 'absolute', top: '50px',left: '80px', width:'600px', height: '200px'}}>
  <Table striped bordered hover size="sm">

  <thead>

  <tr >
    <th style={{backgroundColor: '#b16fef',color: 'white'}}>Employee</th>
    <th style={{backgroundColor: '#b16fef',color: 'white'}}>Task</th>
    <th style={{backgroundColor: '#b16fef',color: 'white'}}>Deadline</th>
    <th style={{backgroundColor: '#b16fef',color: 'white'}}>Workload</th>
  </tr>
</thead>

<tbody>

  <tr>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>1 day</td>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>Update twitter profile</td>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>2017-08-06</td>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>50%
    <div style={barStyle}></div>
    </td>
  </tr>

  <tr>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>1 day</td>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>Update twitter profile</td>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>2017-08-06</td>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>50%
    <div style={barStyle}></div>
    </td>
  </tr>

  <tr>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>1 day</td>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>Update twitter profile</td>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>2017-08-06</td>
    <td style={{backgroundColor: '#f5f5f5',color: 'black'}}>50%
    <div style={barStyle}></div>
    </td>
  </tr>

   </tbody>
</Table>
</div>

       </cardbody>
      </card>

      </div>
      
    )
    }
export default ghome;