import Header from './Header'
import Footer from './footer'
import Movie_list_CSS from '../components/movie_list_css'
import {useState,useEffect} from 'react'
import Link from 'next/link'

import data from '../data/movie_info'

const Movie_list = () => {

  useEffect(()=>{
    var age = document.getElementsByTagName("span")
    for(var i=0; i<age.length; i++){
      if(age[i].textContent === "19"){
        age[i].classList.add('nineteen')
        age[i].textContent = "청불"
      }
      else if(age[i].textContent === "15"){ age[i].classList.add('fifteen') }
      else if(age[i].textContent === "12"){ age[i].classList.add('twelve') }
      else if(age[i].textContent === "전체"){ age[i].classList.add('allage') }
    }
  })

  return(
    <div>
    	<Movie_list_CSS />
      <Header />
      <div className="movie_list">
       	<h2>영화 목록</h2>
     	</div>
			<div className="sort_movie_info">
				{data.map(movies => (
					<div className={"info_movie"}>
						<h2>{movies.movie_info.rank}</h2>
						<Link href={{ pathname: "/movie_details", query: { movieCd: movies.movie_info.movieCd } }}>
							<img src={movies.movie_info.picture}/>
						</Link>
						<div className={"information"}>
							<div className={"movie_name"}>
								<span>{movies.movie_info.ageRestriction}</span>
								<Link href={{ pathname: "/movie_details", query: { movieCd: movies.movie_info.movieCd } }}>
									<a>{movies.movie_info.movieNm}</a>
								</Link>
								<p>예매율 : ??% | 평점 : ?? | 개봉일 : {movies.movie_info.openDt}</p>
								<Link href={{ pathname: "/movie_details", query: { movieCd: movies.movie_info.movieCd } }}>
									<button>상세정보보기</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
      <Footer />
    </div>
  )
}

export default Movie_list
