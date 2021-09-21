/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';
import './App.css';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();     
      let originals = list.filter(item => item.slug ==='originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      
      setfeaturedData(chosenInfo);
      setMovieList(list);
    }

    loadAll();
  }, []);
  
  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlackHeader(true);
      }else{
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener());
    return () => {
      window.removeEventListener('scroll', scrollListener());
    }
  }, []);

  return (
    <div className="page">

    <Header isBlack={blackHeader} />

    {featuredData && <FeaturedMovie movie={featuredData} />}
      
      <section className="lists">
        {
          movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))
        }
      </section>
    </div>
  );
}