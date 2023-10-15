
   import moment from 'moment';

   import React , {useState , useEffect} from 'react'
 
   
   function time() {
    const [currentDateTime, setCurrentDateTime] = useState(moment().format('YYYY-MM-DD '));
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDateTime(moment().format('dddd, DD-MMMM '));
        }, 1000);
        return () => clearInterval(interval);
      }, []);
   
return ( 
<div className='Day'>
    <h2>My Day</h2>
    {currentDateTime}
    </div>
    )
   }
   
   export default time
