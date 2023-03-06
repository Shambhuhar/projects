import React from 'react'

export default function AboutUs() {
    return (
        <div>
            <div className="about">
            <div className="about_heading my-3">
                <h1 className="fs-bold text-center" >About us</h1>
                <hr />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                        <figure>
                           <img src="images/about.jpg" className="img-fluid img-thumbnail" alt="" />
                        </figure>
                    </div> 

                    <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                        <h3>About NearByu</h3>
                        <p className="lh-base">
                        NearByu is an application that helps users easily find a professional serviceman for daytoday household 
                        repairing and maintainence either in their new location or current location. The target 
                        customers are students, residents, and oldage peoples,etc.
                        </p>

                        <p className="lh-base">
                        NearByU  application makes finding an professional serviceman in your preferred location for
                        your needs easily. With the application, it is easy
                        to find people who need repairmen and connects them with the particular serviceman that suits your budget.
                        </p>
                    </div>  

                    <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                        <h3>Our Mission</h3>  
                        <p className="lh-base">
                        Design a product experience that makes it safe to
                        find the ideal serviceman in a new city.
                        Design the experience from 
                        the perspective of a person looking for a maintainence and repairing of various household needs.   
                        </p>

                        <p className="lh-base">
                          NearByu is a friendly and resourceful solution to find a serviceman
                          around your locality to help you in your need of hour.
                          Define your search criterions, then tell us about your 
                          service needs and we will show you serviceman available from the comfort of your home.
                          Because feeling comfortable and having a good time at home is all about finding the right guy
                          for the right job.
                        </p>
                    </div> 

                    <div className="col-lg-6 col-md-6 col-12 col-xxl-6">
                        <figure >
                           <img src="images/about2.jpg"  className="img-fluid img-thumbnail" alt="" />
                        </figure>
                    </div> 
                </div>
            </div>
        </div>  
        </div>
    )
}
