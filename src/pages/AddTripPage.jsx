import { Link } from "react-router-dom"

export default function AddTripPage() {
  return (
    
    <form className="travel-form">
      
      <div className="form-group">
        <label htmlFor="destination" className="form-label">Destinazione</label>
        <input type="text" className="form-control" id="destination" name="destination" required />
      </div>

      <div className="form-group">
        <label  className="form-label">Data di inizio</label>
        <input type="date" className="form-control" id="start-date" name="start-date" required />
      </div>

      <div className="form-group">
        <label  className="form-label">Data di fine</label>
        <input type="date" className="form-control" id="end-date" name="end-date" required />
      </div>

      <div className="form-group">
        <label className="form-label">Immagine (URL)</label>
        <input type="url" className="form-control" id="image" name="image" required />
      </div>

      <div className="form-group">
        <label  className="form-label">Partecipanti</label>
        
        <div className="input-group">
          
          <input 
            type="text" 
            className="form-control" 
            placeholder="Aggiungi nuovo partecipante"
          />
          
          <button 
            type="button" 
            className="btn btn-add-participant">
            Aggiungi partecipante
          </button>
        
        </div>
      </div>

      <button className="btn btn-submit">Crea viaggio</button>
      <Link to={"/"}> <button className="btn">RITORNA IN HOME</button>  </Link>
    </form>
  )
}
