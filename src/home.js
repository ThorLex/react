import {useState} from 'react';
import BlogList from './bloglist';
import useFetch from './useFetch';

const Home = () => {

//  const clean =(id) => {
//     let newBlogs = blogs.filter((blog) => blog.id !== id )
//     setBlogs(newBlogs)
// }




const [auteur] = useState("yoshi");
const {data:blogs,laoding:Laoding,error} = useFetch("http://localhost:8000/blogs")
let titre =  auteur +"'s Blogs";
     




// console.log(fetch('http://localhost:8000/blogs').then(res => {res.json()}).then(data => {console.log(data)}))



    return ( 
         <div className="home">
         {/* <h2>homePage</h2> <br /> <br /> */}
  {/* code permettant d afficher une liste  */}
  
  <div className="home">
    { Error && <div> {error}</div>}
    { Laoding && <div>laoding</div> }
 {  blogs &&  <BlogList blogs={blogs} title="All Blogs"  />}
      {/* <button onClick={() => setauteur('mario')}>change name</button> <br /><br /><br /> */}
     {  blogs &&<BlogList blogs={blogs.filter(blog => blog.author === auteur)} title={titre}  />}
    </div>

    </div>
      
     );
}
 

export default Home;