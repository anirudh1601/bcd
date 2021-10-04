import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './gallery.css'

import Gallery1 from "./gallery1"

const Gallery = () =>{
    
    return (
        <>
    <h1 style={{"textAlign":'center',}}>Gallery</h1>
    <div class="container gallery-container">

        
        <div class="tz-gallery">

            <div class="row">

                <div class="col-sm-12 col-md-4">
                < a className="lightbox" href="/gallery"><img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/bridge.jpg" alt="Bridge" /></a>
                        
                    
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg">
                        <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/park.jpg" alt="Park" />
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg">
                        <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/tunnel.jpg" alt="Tunnel" />
                    </a>
                </div>
                <div class="col-sm-12 col-md-8">
                    <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg">
                        <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/traffic.jpg" alt="Traffic" />
                    </a>
                </div>
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg">
                        <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/rails.jpg" alt="Coast" />
                    </a>
                </div> 
                <div class="col-sm-6 col-md-4">
                    <a class="lightbox" href="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg">
                        <img src="https://raw.githubusercontent.com/LeshikJanz/libraries/master/Related%20images/Bootstrap%20example/coast.jpg" alt="Rails" />
                    </a>
                </div>

            </div>

        </div>
        
    </div>

        </>
    )

}
export default Gallery;