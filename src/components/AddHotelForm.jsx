import React, { useState } from "react";

const AddHotelForm = () => {
const [term, setTerm] = useState(false)
const [park, setPark] = useState(false)
const [wifi, setWifi] = useState(false)
const [pool, setPool] = useState(false)
const [spa, setSpa] = useState(false)
const [restaurant, setRestaurant] = useState(false)

 const [formData, setFormData] = useState({
   name: "", 
   category: "",  
   location: "",  
   rating: "",
   website: "",
   phoneNumber: "",
   checkInTime: "",
   checkOutTime: "",
   amenities: "",
   priceRange: "",
   reservationsNeeded: false,
   isParkingAvailable: false,
   isWifiAvailable: false,
   isPoolAvailable: false,
   isSpaAvailable: false,
   isRestaurantAvailable: false,
   photos: ""
});

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log(name, value)
        setFormData((prevState) => ({
            ...prevState,
            [name]: 
            name === "releaseYear" ? parseInt(value): value, 
        }));
    };

    const handleSetTerm = (event) => {
    const { name, checked } = event.target;
   setTerm(checked);
    setFormData((prev) => ({
    ...prev,
    [name]: checked,
  }));
};

  const handleSetPark = (event) => {
  const { name, checked } = event.target;
  setPark(checked);
  setFormData((prev) => ({
    ...prev,
    [name]: checked,
  }));
};

     const  handleSetWifi = (event) => {
   const { name, checked } = event.target;
    setWifi(checked);
   setFormData((prev) => ({
    ...prev,
    [name]: checked,
  }));
};

    const handleSetPool = (event) => {
        const {name, checked} = event.target;
        // console.log(name, value)
        setPool(checked);
       setFormData((prev) => ({
    ...prev,
    [name]: checked,
  }));
    };

    const handleSetSpa = (event) => {
        const {name, checked} = event.target
        // console.log(name, value)
        setSpa(checked)
        setFormData((prev) => ({
    ...prev,
    [name]: checked,
  }));
    }

    const handleSetRestaurant = (event) => {
        const {name, checked} = event.target
        setRestaurant(checked)
        setFormData((prev) => ({
    ...prev,
    [name]: checked,
  }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(formData)

        try{
            const response = await fetch("https://hotels-data-one.vercel.app/hotels", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(formData)
            });

            if(!response.ok){
                throw "Failed to add hotel."
            }

            const data = await response.json()
            console.log(data)
            window.location.reload()

        } catch(error){
            console.log(error)
        }
    }

    return(
        <div>
            <h2>Add New Hotel</h2>
            <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <br/>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
            <br/>
            <br/>

            <label>Category:</label>
            <br/>
            <select type="text" name="category" value={formData.category} onChange={handleChange}>
                <option value="Budget">Budget</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="Luxury">Luxury</option>
                <option value="Boutique">Boutique</option>
                <option value="Resort">Resort</option>
                <option value="Other">Other</option>
            </select>
            <br/>
            <br/>

            <label>Location:</label>
            <br/>
            <input type="text" name="location" value={formData.location} onChange={handleChange}/>
            <br/>
            <br/>

            <label>Rating(min is 0 and max is 5):</label>
            <br/>
            <input type="number" name="rating" value={formData.rating} onChange={handleChange}/>
            <br/>
            <br/>

            <label>Website:</label>
            <br/>
            <input type="text" name="website" value={formData.website} onChange={handleChange}/>
            <br/>
            <br/>

            <label>PhoneNumbere:</label>
            <br/>
            <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange}/>
            <br/>
            <br/>

            <label>CheckInTime:</label>
            <br/>
            <input type="text" name="checkInTime" value={formData.checkInTime} onChange={handleChange}/>
            <br/>
            <br/>

            <label>CheckOutTime:</label>
            <br/>
            <input type="text" name="checkOutTime" value={formData.checkOutTime} onChange={handleChange}/>
            <br/>
            <br/>

            <label>Amenities:</label>
            <br/>
            <input type="text" name="amenities" value={formData.amenities} onChange={handleChange}/>
            <br/>
            <br/>

            <label>Price Range:</label>
            <br/>
            <select name="priceRange" value={formData.priceRange} onChange={handleChange}>
                <option value='$$ (11-30)'>$$ (11-30)</option>
                <option value='$$$ (31-60)'>$$$ (31-60)</option>
                <option value='$$$$ (61+)'>$$$$ (61+)</option>
                <option value="Other">Other</option>
            </select>
            <br/>
            <br/>

            <label htmlFor="reservations">Reservations Needed:</label>
            <br/>
            <input type="checkbox" name="reservationsNeeded" id="reservations" checked={term} onChange={(e) => handleSetTerm(e)}/>
            <br/>
            <br/> 

            <label htmlFor="isParking">isParking Available:</label>
            <br/>
            <input type="checkbox" name="isParkingAvailable" id="isParking" checked={park} onChange={(event) => handleSetPark(event)}/>
            <br/>
            <br/>

            <label htmlFor="isWifi">Is Wifi Available:</label>
            <br/>
            <input type="checkbox" name="isWifiAvailable" id="isWifi" checked={wifi} onChange={(event) => handleSetWifi(event)}/>
            <br/>
            <br/>

            <label htmlFor="isPool">Is Pool Available:</label>
            <br/>
            <input type="checkbox" name="isPoolAvailable" id="isPool" checked={pool} onChange={(event) => handleSetPool(event)}/>
            <br/>
            <br/>

            <label htmlFor="isSpa">Is Spa Available:</label>
            <br/>
            <input type="checkbox" name="isSpaAvailable" id="isSpa" checked={spa} onChange={(event) => handleSetSpa(event)}/>
            <br/>
            <br/>

            <label htmlFor="isRestaurant">Is Restaurant Available:</label>
            <br/>
            <input type="checkbox" name="isRestaurantAvailable" id="isRestaurant" checked={restaurant} onChange={(event) => handleSetRestaurant(event)}/>
            <br/>
            <br/> 

            <label>Photos:</label>
            <br/>
            <input type="text" name="photos" value={formData.photos} onChange={handleChange}/>
            <br/>
            <br/>

            <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default AddHotelForm

