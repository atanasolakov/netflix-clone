import Image from 'next/image'
import {getSession, signOut} from "next-auth/react";
import {NextPageContext} from "next";
import {session} from "next-auth/core/routes";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";
import Bilboard from "@/components/Bilboard";
import MovieList from "@/components/MovieList";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";


export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);
    if(!session){
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            }
        }
    }
    return {
        props: {}
    }
}


export default function Home() {
    const { data: movies = [] } = useMovieList();
    const { data: favorites = [] } = useFavorites()
  return (
      <>
      <Navbar />
      <Bilboard />
          <div className={'pb-40'} >
              <MovieList title={'Trending now'} data={movies} />
              <MovieList title={'Favorites'} data={favorites} />
          </div>

      </>
  )
}
