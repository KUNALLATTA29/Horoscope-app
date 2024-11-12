import React,{useState} from 'react'
import axios from 'axios'
import './Home.css'


export default function Home() {
  const [horoscope,setHoroscope] = useState(null);
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState(null)
  const [sign,setSign] = useState('leo')
  const [menuOpen, setMenuOpen] = useState(false)

  const fetch = async()=>{
    setLoading(true)
    setError(null)
    try{
      const options = {
        method: 'GET',
        url: 'https://best-daily-astrology-and-horoscope-api.p.rapidapi.com/api/Detailed-Horoscope/',
        params: { zodiacSign: sign.toLowerCase() },
        headers: {
          'x-rapidapi-key': '1761a4df97mshb3fbdf13bd1508bp1f3bb1jsn3c81e643103a',
          'x-rapidapi-host': 'best-daily-astrology-and-horoscope-api.p.rapidapi.com'
        }
      };
      const response = await axios.request(options);
      console.log(response.data)
      setHoroscope(response.data)
    }catch(error){
      setError('There is an issue in getting data')
    }finally{
      setLoading(false)
    }
    
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    fetch()
    setMenuOpen(false)
  }


  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="form">
  <label className="label">
    Zodiac Sign:
    <select value={sign} onChange={(e) => setSign(e.target.value)} className="select">
      <option value="aries">Aries</option>
      <option value="taurus">Taurus</option>
      <option value="gemini">Gemini</option>
      <option value="cancer">Cancer</option>
      <option value="leo">Leo</option>
      <option value="virgo">Virgo</option>
      <option value="libra">Libra</option>
      <option value="scorpio">Scorpio</option>
      <option value="sagittarius">Sagittarius</option>
      <option value="capricorn">Capricorn</option>
      <option value="aquarius">Aquarius</option>
      <option value="pisces">Pisces</option>
    </select>
  </label>
  <button type="submit" className="submit-btn">Get Horoscope</button>
</form>
    {loading && <div className="loading">Loading...</div>}
    {error && <div className="error">{error}</div>}
    {horoscope && (
      <div className="horoscope-card">
        <h3 className="horoscope-title">Today's Horoscope for {sign}</h3>
        <div className="horoscope-details">
          <p><strong>Prediction:</strong> {horoscope.prediction}</p>
          <p><strong>Lucky Numbers:</strong> {horoscope.number}</p>
          <p><strong>Lucky Colors:</strong> {horoscope.color}</p>
          <p><strong>Strengths:</strong> {horoscope.strength}</p>
          <p><strong>Weaknesses:</strong> {horoscope.weakness}</p>
        </div>
      </div>
    )}
  </div>
  );
}
