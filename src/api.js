export const fetchData1 =  () => {
   
         return fetch("https://randomuser.me/api").then(res=>{
            console.log(' user response::::',res);
            return data = res.json();
        });
       
    
}
export const fetchAData1 =  () => {
    try {
         return fetch("https://randomuser.me/api").then(res=>{
            console.log(' account response::::',res);
            return data =  res.json();
        });
        
    } catch (e) {
        console.log('error in fetch', e);
    }
}