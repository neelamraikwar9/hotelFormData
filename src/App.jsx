
import './App.css'
import Hotel from './components/Hotel'
import HotelName from './components/HotelName'
import AddHotelForm from './components/AddHotelForm'

function App() {
  
  return (
    <main>
     <AddHotelForm />
     <Hotel />
     <HotelName name="Sunset Resort"/>
    </main>
  )
}

export default App
