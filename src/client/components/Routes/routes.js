import Home from "../../pages/Home/home";
import UsersListComponent from '../../pages/UsersList/usersList';
import RickMortyPage from '../../pages/RickMorty/rickMorty';

export default [
  {
    path: '/',
    ...RickMortyPage,
  },
  {
    path: '/users',
    ...UsersListComponent,
  },
  {
    path: '/rick-morty',
    ...RickMortyPage,
  }
];
