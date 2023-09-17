import {useState,useEffect} from 'react'

const useFetch = (url ) => {
  const [laoding, setLaoding] = useState(true);
  const [error, seterror] = useState(null);
  const [data, setBlogs] = useState(null)
 
useEffect(() => {
  const abortCont = new AbortController(); 
   
    setTimeout(() => {
        
    fetch(url,{signal: abortCont.signal})  
                .then(res => {
                   
                    if (!res.ok) {
                      
                      throw Error ('could not fecth the data for that ressource');  
                    }
    
                return res.json();
              
                })
                .then (data => {
                        setBlogs(data)
                        setLaoding(false)
                        seterror(null)
                })
                .catch (err =>{
                  if (err.name === 'AbortError') {
                     console.log(err)
                    setLaoding(false);
                 
                  } else {
                    // auto catches network / connection error
                    setLaoding(false);
                    seterror(err.message);
                   
                  }

                 
                 
    
                })
                
                },1000 );
                return () => abortCont.abort();
    
    }, [url]);
    
    return {data,laoding,error}
    
}
 
export default useFetch;
