
import './App.css';
import Individual from './component/Caroselle';
import Movie_list from './component/Movie _list';
import BasicExample from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './component/data';
import { useEffect, useState } from 'react';
function App() {
 
 
  const [movie,setmovie]=useState(data)
useEffect(()=>{
  var x=JSON.parse(localStorage.getItem('movie'))
  if(x!=null){
    setmovie([...movie,x])
  }
},[])

  return (
    <div className="App">
      
<BasicExample/>
<Individual/>
<Movie_list movies={movie}/>




    </div>
  );
}

export default App;
