import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
   





const Blogdetail = () => {
    const nav = useNavigate();
    const{id} = useParams();
    const {data:blog,laoding,error} = useFetch("http://localhost:8000/blogs/"+ id);
    const sup = ()=> {
        fetch('http://localhost:8000/blogs' + blog.id, {
            method: 'DELETE'
        }).then(() => {
         
            nav('/');
        })
    }
    return (  
        <div className="blog-details">
            {/* <h2>Details du blog - {id} </h2> */}
            <div></div>
            {laoding &&   <div> laoding ... </div>}
            {error && <div>{error} </div>}
            {blog && ( 

               <div>
                <article>
                    <h2>{blog.title} -<small> <p>{blog.author} </p></small></h2>
                    

                    <p className="article">{blog.body} </p>
                    <button onClick={ ()=> {sup()}}>delete</button>
                </article>
               </div>
            )}

        </div>
    );
}
 
export default Blogdetail;