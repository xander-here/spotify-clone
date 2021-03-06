import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HomeDefault from '../SmallComponents/HomeDefault';

import './index.css';

function Genre(props) {
  const arr = [
    {
      type: 'artist',
    },
    { type: 'song' },
    {
      type: 'artist',
    },
    { type: 'song' },
    {
      type: 'artist',
    },
    { type: 'song' },
    {
      type: 'artist',
    },
    { type: 'song' },
    {
      type: 'artist',
    },
  ];

  const { id } = useParams();

  return (
    <div className="genre">
      <div className="genre__info">
        <div
          className="genre__info__background"
          style={{
            backgroundColor: `#${new URLSearchParams(props.location.search).get(
              'c'
            )}`,
          }}
        ></div>
        <div className="genre__info__background-noise"></div>

        <div className="genre__info__desc">
          <h1 className="one-line">{id}</h1>
        </div>
      </div>

      <div
        className="genre__background"
        style={{ backgroundColor: 'rgb(39, 133, 106)' }}
      ></div>
      <div className="genre__section">
        <section className="genre__section__default-section">
          <div className="genre__section__default-section__title">
            <h2>
              <Link to="/album/dcig">Albums</Link>
            </h2>
            <span>
              <Link to="/album/dcig">SEE ALL</Link>
            </span>
          </div>
          <HomeDefault arr={arr} />
        </section>
      </div>
    </div>
  );
}

export default Genre;
