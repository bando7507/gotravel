export const getPlaceData = async () =>{
    try{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '90a435a555msh166f4881aef08d8p16167ajsnfc02e014e14f',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        };
        
         const data = await fetch('https://travel-advisor.p.rapidapi.com/restaurants/list-by-latlng?latitude=40.712784&longitude=-74.005941&limit=30&currency=USD&distance=2&open_now=false&lunit=km&lang=en_US', options)

        
        return data;            
    } catch(error){
        return null
    }
    
}