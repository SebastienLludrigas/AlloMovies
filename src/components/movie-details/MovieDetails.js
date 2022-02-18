import React, { Component } from 'react';

class MovieDetails extends Component {
   render () {
      return (
         <div className='w-25 border p-4 d-flex flex-column'>
            <h5>{ this.props.movie.title }</h5>
            <hr className="w-100" />
            <div>
               <img 
                  width='250'
                  className='d-block mx-auto'
                  src={ this.props.movie.img } 
                  alt="" 
               />
            </div>
            <hr className="w-100" />
            <p className="text-secondary">{ this.props.movie.details }</p>
            <p>{ this.props.movie.description }</p>
         </div>
      )
   }
}

export default MovieDetails;