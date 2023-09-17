import {Link }from 'react-router-dom'
const navbar = () => {
  return ( 
    <nav className="navbar">
    <h1> Le blog du cunsinier</h1>
    <div className="links">
      <a><Link to={'/'}> Home</Link></a>
     <a><Link to={'/create'}> New blog</Link></a>
     <a><Link to={'/about'}> About</Link></a>   
       
           
    </div>
    </nav>
   );
}
 
export default navbar;