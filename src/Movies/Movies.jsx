import {Component} from "react";
import {movies_record} from "./movies_data.js";
import { Button, Table } from 'reactstrap';

class Movies extends Component{

    state={movies:movies_record(),
           genre_based:movies_record()}

    handleDelete=(movie_del)=>{

        // console.log(movie_del);

        let filt_movies=this.state.genre_based.filter( (movie)=>{
                            return movie._id!==movie_del._id;
                            
        } )

        this.setState({genre_based:filt_movies})

    }

    handleGenre=(e)=>{
       let genre=e.target.value;
       const {movies}=this.state;
       let filt_movies=[]

       if(genre==="Thriller"){
         filt_movies=movies.filter( (movie)=>{
            return movie.genre.name=== "Thriller";
        })
       }

       else if(genre==="Comedy"){
         filt_movies=movies.filter( (movie)=>{
            return movie.genre.name=== "Comedy";
        })
       }
       else if (genre==="Action"){
         filt_movies=movies.filter( (movie)=>{
            return movie.genre.name=== "Action";
        })
       }

       else{
        filt_movies=movies.map( (movie)=>{
            return movie;
        })
       }

       this.setState({genre_based:filt_movies});
    }

    render(){

        const{genre_based}=this.state;
        // console.log(genre_based);


        return (
            <>
            <h3 style={{textAlign: 'center'}}>Filter genre of your choice !</h3>
            <br />

            <select style={{position: 'absolute',left:"46%"}} onChange={this.handleGenre} name="genre" id="genre">
                <option value="All">All</option>
                <option value="Thriller">Thriller</option>
                <option value="Comedy">Comedy</option>
                <option value="Action">Action</option>
            </select>


            <br /><br />

            {(genre_based.length>0) ? 

           <>
            
                <Table hover>
                    <thead>
                        <tr>
                            <th>S/No.</th>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Ratings</th>
                            <th>Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {genre_based.map( (movie,index)=>{ 
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{movie.title}</td>
                                    <td>{movie.genre.name}</td>
                                    <td>{movie.dailyRentalRate}</td>
                                    <td><Button color="danger" onClick={()=>{this.handleDelete(movie)}}>Delete</Button></td>
                                </tr>
                            )

                        } )}
        
                    </tbody>
                </Table>

                </>

                : <h1 style={{textAlign: 'center'}}>There are no movies to display!!!</h1> }
            </>
        )
    }
}

export default Movies;