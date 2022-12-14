import MovieModal from "./MovieModal";
import { useState } from "react";

function Movie({ movie }) {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <MovieModal
        movie={movie}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <div className="col-sm-12 col-md-6 col-lg-3 mb-4 listPosterContainer">
        <img
          onClick={() => {
            setModalShow(true);
            //hacer el modal con estados show, setShow
          }}
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          className="img-fluid listPoster"
          alt=""
        />
      </div>
    </>
  );
}

export default Movie;
