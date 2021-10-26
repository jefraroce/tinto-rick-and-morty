import { useEffect, useState } from "react";

function Characters () {
  const [characters, setCharacters] = useState([]);
  const [next, setNext] = useState('');
  const [prev, setPrev] = useState('');

  // Carga los 20 siguientes
  const handleNext = (event) => {
    loadCharacters(next);
  }

  // Carga los 20 anteriores
  const handlePrev = (event) => {
    loadCharacters(prev);
  }

  /**
   * Carga los personajes dependiendo de una URL
   * @param {String} url 
   */
  const loadCharacters = (url) => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
        setNext(data.info.next);
        setPrev(data.info.prev);
      });
  }

  // Carga de los primeros 20 personajes
  useEffect(() => {
    loadCharacters('https://rickandmortyapi.com/api/character');
  }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>Characters</h1>

        <div>
          {prev && (<button className="btn btn-danger me-2" onClick={handlePrev}>Anterior</button>)}

          {next && (<button className="btn btn-danger" onClick={handleNext}>Siguiente</button>)}
        </div>
      </div>

      <div className="row">
        {characters.map((character) => {
          return (
            <div key={character.id} className="col-12 col-sm-6 col-md-4 mb-3">
              <div className="card">
                <img src={character.image} alt="" className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                </div>
              </div>
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default Characters;
