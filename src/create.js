import{useState}from 'react'
import { useNavigate } from "react-router-dom";


const Create = () => {


  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
const [envoie, setenvoie] = useState(false);
const navigate = useNavigate();

 
  const handleSubmit = (e) => {
    setenvoie(true)
   
   
    const blog = { title,body,author };

   console.log(blog)
fetch('http://localhost:8000/blogs',{
    method:'POST',
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(blog)
}).then(()=> {

console.log("ajouter avec succes");
setTimeout(() => {
    setenvoie(false);

  }, 0);

  navigate("/");

}

)
    
  }
    return ( 
       
    <div className="create">
    <h2>Add a New Blog</h2>
    <form >
      <label>Blog title:</label>
      <input 
        type="text" 
        required  
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      
       
      />
      <label>Blog body:</label>
      <textarea
        required
        value={body}
        onChange={(e) => setBody(e.target.value)}
        
        
       
      ></textarea>
      <label>Blog author:</label>
      <select
       value={author}
       onChange={(e) => setAuthor(e.target.value)}
        
      >
        <option value="mario">mario</option>
        <option value="yoshi">yoshi</option>
      </select>
      
    </form>
   {!envoie && <button onClick={() => handleSubmit()}>Add Blog</button>}
   {envoie && <button  disable>Adding blog ...</button>}
    <p>{title} </p>
    <p>{body} </p>
    <p>{author} </p>
  </div>
     );
}
 
export default Create;