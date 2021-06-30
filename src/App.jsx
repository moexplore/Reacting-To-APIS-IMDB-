import React, { useState, useEffect } from "react";

const App = () => {
  const [loadedFilms, setLoadedFilms] = useState(false);
  const [loadedPeople, setLoadedPeople] = useState(false);
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState();
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((films) => setFilms(films));
  });
  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((people) => setPeople(people));
  });

  if (!loadedFilms && !loadedPeople ) {
    return (
      <main className="container">
        <section className="row justify-content-center mt-5">
          <div className="card">
            <h1 className="card-header text-center">
              Press these buttons to see some super cool info about Studio Ghibli films
            </h1>
            <p className="card-body text-center">
              I'm doing this to show I can play a great game of fetch with React
              as well as dogs!  Though now I'm real curious about Studio Ghibli...
            </p>
          </div>
          <button className="btn-success col-md-4 mt-4" onClick={() => setLoadedFilms(true)}>
            Load Films
          </button>
          <button className="btn-dark col-md-4 mt-4" onClick={() => setLoadedPeople(true)}>
            Load People
          </button>
        </section>
      </main>
    );
  } else if (loadedFilms) {
    return (
      <main className="container">
        <section className="row justify-content-center mt-5">
          {films.map((film) => (
            <div className=" card col-md-6" key={`film-card-${film.id}`}>
              <h1 className="card-header">{film.title}</h1>
              <p className="card-body">{film.description}</p>
              <a href={film.url} className="card-footer" target="_blank">
                API Link
              </a>
            </div>
          ))}
        </section>
      </main>
    );
  } else if (loadedPeople) {
    return (
        <main className="container">
          <section className="row justify-content-center mt-5">
            {people.map((peeps) => (
              <div className=" card col-md-6 justify-content-center m-1" key={`film-card-${peeps.id}`}>
                <h1 className="card-header text-center">{peeps.name}</h1>
                <h2 className="card-subtitle text-center">{peeps.age}, {peeps.gender}</h2>
                <a href={peeps.url} className="card-footer" target="_blank">
                  API Link For This Person's JSON Response!
                </a>
              </div>
            ))}
          </section>
        </main>
      );
  }
};

export default App;
