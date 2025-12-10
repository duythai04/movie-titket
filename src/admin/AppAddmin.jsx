import { Admin, Resource } from 'react-admin';
import { dataProvider } from './dataProvider';
import { authProvider } from './authProvider';

import MovieList from './resources/movies/MoviesList';
import MovieCreate from './resources/movies/MoviesCreate';
import MovieEdit from './resources/movies/MoviesEdit';

const AppAdmin = () => {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="movies" list={MovieList} create={MovieCreate} edit={MovieEdit} />
    </Admin>
  );
};

export default AppAdmin;
