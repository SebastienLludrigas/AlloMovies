import React, { Component } from 'react';

class MovieElement extends Component {
   render () {
      return (
         <div className="w-25 p-2">
            <div className="card">
               <img src="https://www.gstatic.com/tv/thumb/v22vodart/24674/p24674_v_v8_ag.jpg" alt="film" className='car-img-top' />
               <div className="card-body">
                  <h5 className="card-title">GLADIATOR</h5>
                  <p className="card-text">
                     Sur le front du limes du Danube en 180, Maximus Decimus Meridius, général romain renommé, mène une    nouvelle fois les légions de l'empereur Marc Aurèle à la victoire en ce jour de bataille en  Germanie contre les Marcomans. L'empereur, sentant sa fin proche, annonce le soir même en privé à   Maximus qu'il souhaite lui laisser le pouvoir à sa mort, pour qu'il puisse le transmettre au Sénat   et que Rome devienne à nouveau une République.
                  </p>
               </div>
            </div>
         </div>
      );
   };
};

export default MovieElement;