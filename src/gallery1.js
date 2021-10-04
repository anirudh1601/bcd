import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import "./gallery.css"


const Gallery1 = () =>{
    let data = [
        {
            id:1,
            src:"https://media.istockphoto.com/photos/african-boy-picture-id185404655?k=20&m=185404655&s=612x612&w=0&h=pvvtVq_56SY4M4EfaC-F0NtGit8oogKkNWfi6d1lxt4=",
        },
        {
            id:2,
            src:"https://images.pexels.com/photos/1739842/pexels-photo-1739842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        },
        {
            id:3,
            src:"https://t3.ftcdn.net/jpg/01/67/03/08/360_F_167030839_RqCO4V0yaxJKZVAwlxSgWNtlRZT00n1H.jpg",
        },
        {
            id:4,
            src:"https://i.pinimg.com/originals/d1/29/82/d12982eac6459de8563c0dda0a429d74.jpg",
        },
        {
            id:5,
            src:"https://www.compassion.com/Images/hungry-children-hero-2020_159459_640x277.jpg",
        },

    ]

    return (
        <>
            <div className="container gallery-container">            
              <div className="tz-gallery">
                <div className="row">
                {data.map((item,index)=>{
                    return (
                        <div className="col-sm-12 col-md-4" key={index}>
                            <a className="lightbox" href={item.src}>
                              <img src={item.src} />
                            </a>
                        </div>
                    )
                })}
                </div>
              </div>
            </div>
          
        </>
    )

}
export default Gallery1;