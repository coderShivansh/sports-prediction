import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    
     <Main> 
<div className="container my-5">
  
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: "#1c2331"}}
          >
    
    <section
             className="d-flex justify-content-between p-4"
             style={{backgroundColor: "#007FFF",borderRadius:"10px"}}
             >
      
      <div className="me-5">
        <span>Get connected with us on social networks:</span>
      </div>
      

      
      <div>
        <a href="" className="text-white me-4">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-google"></i>
        </a>
        <a href="" className="text-white me-4">
          <i className="fab fa-instagram"></i>
        </a>
        
      </div>
      
    </section>
    
    <section className="">
      <div className="container text-center text-md-start mt-5">
        
        <div className="row mt-3">
         
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold">Company name</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Partners</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: '60px' ,backgroundColor: '#7c4dff', height: '2px'}}
                />
            <p>
              <a href="#!" className="text-white">1XBet</a>
            </p>
            <p>
              <a href="#!" className="text-white">Dream11</a>
            </p>
            <p>
              <a href="#!" className="text-white">Viko11</a>
            </p>
            <p>
              <a href="#!" className="text-white">Rummy123</a>
            </p>
          </div>
          
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            
            <h6 className="text-uppercase fw-bold">Other links</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p>
              <a href="#!" className="text-white">Card Betting</a>
            </p>
            <p>
              <a href="#!" className="text-white">Horse</a>
            </p>
            <p>
              <a href="#!" className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#!" className="text-white">Poker</a>
            </p>
          </div>
          
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            
            <h6 className="text-uppercase fw-bold">Contact</h6>
            <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                />
            <p><i className="fas fa-home mr-3"></i> New York, NY, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
          
        </div>
        
      </div>
    </section>
    
    <div
         className="text-center p-3"
         style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
         >
      © 2024 Copyright: 
      <a class="text-white" href="https://GitHub.com/ketansharma1411"
         >Ketan_Sharma</a>
    </div>
    
  </footer>
  

</div>
</Main>
    
  )
}

const Main=styled.div`
.container{
  display: flex;
  justify-content: center;
  align-items: center;
}

footer{
    margin-top:6rem;
    border-radius:10px;
    width:980px;
    margin-left:-20px;
    margin-bottom:-100px;    
}
p{
  display: flex;
  align-self: flex-center;
}
@media (max-width: 830px) {
    footer{
        margin-top:4rem;
    border-radius:10px;
    width:100%;
    margin-left:0px;
    margin-bottom:-100px;
    }
    
}

`
