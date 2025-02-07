import { movieDataHelpers } from '@/helpers/MovieData.helpers';
import React from 'react'
import ListCardSection from '@/components/ListCardSection';

const MoviesView: React.FC = () => {

  return (
    <div className='grid grid-cols-1 gap-y-[1rem bg-gradient-to-r from-[#141414] to-black]'>
      <ListCardSection section="Animes" />
      <ListCardSection section="Movies" />
      <ListCardSection section="Movies" />
    </div>
  )
}

export default MoviesView;