import useFetch from '../useFetch';
const HotelName = ({name}) => {
    const {data, loading, error} = useFetch(`https://hotels-data-one.vercel.app/hotels/${name}`)
    // console.log(data)
    return data? (
        <div>
        <h2>{data.name}</h2>
        <p><strong>Location:</strong>{data.location}</p>
        <p><strong>Rating:</strong> {data.rating}</p>
        <p><strong>Price Range:</strong> {data.priceRange}</p>
        </div>
    ) : loading && <p>Loading...</p>
}

export default HotelName;