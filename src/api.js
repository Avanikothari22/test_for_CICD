export const fetchData1 = async () => {
   
        const response = await fetch("https://randomuser.me/api");
       return data = await response.json();
    
}
export const fetchAData1 = async () => {
    try {
        const response = await fetch("https://randomuser.me/api");
      return data = await response.json();
    } catch (e) {
        console.log('error in fetch', e);
    }
}