import { useState } from 'react';
import useFetch from '../useFetch';
const Hotel = () => {
    const[successfulMessage, setSuccessfullMessage] = useState("")
    const {data, loading, error} = useFetch("https://hotels-data-one.vercel.app/hotels")
    // console.log(data)

   const handleDelete = async (hotelId) => {
    try{
        const response = await fetch(`https://hotels-data-one.vercel.app/hotels/${hotelId}`,
            { method: "DELETE"}
        );

        if(!response.ok){
            throw "Failed to delete hotel."
        }
        const data = await response.json();
        if(data){
            setSuccessfullMessage("hotel deleted successfully.");
            window.location.reload();
        }

    } catch(error){
        console.log(error);
    }
   };

    return (
        <div>
            <ul>
            <h2>All Hotels</h2>
                {data?.map(hotel => (
                    <li key={hotel._id}>
                        {hotel.name}{" "}<button onClick={() => handleDelete(hotel._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <p>{successfulMessage}</p>

        </div>

    )

}

export default Hotel