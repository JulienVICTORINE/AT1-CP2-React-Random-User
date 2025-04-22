function Card({ img, name, age, location, email }) {
    return (
      <div className="card">
        <div className="card-header">
          <img
            className="card-header__img"
            src={img}
            alt={`Photo de profil de ${name}`}
          />
        </div>
  
        <div className="card-body">
          <h5 className="card-body__title">{name}</h5>
          <div className="card-body__infos">
            <p className="card-body__infos_age">
              <span>Âge : {age} ans</span>
            </p>
            <p className="card-body__infos_location">
              <span>Location : {location}</span>
            </p>
            <p className="card-body__infos_email">
              <span>Email : {email}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  