import { useContext } from "react";
import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import FavoritesContext from '../../store/context';
import AuthContext from "../../store/auth-context";

export default function MainNavigation ()
{
  const favoritesCtx = useContext( FavoritesContext );
  const authCtx = useContext( AuthContext );
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <header className={ classes.header }>
      <div className={ classes.logo }>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          { !isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          ) }
          <li>
            <Link to="/home">Home</Link>
          </li>
          { isLoggedIn && (
            <li>
              <Link to='/favorites'>Favorites <span className={ classes.badge }>{ favoritesCtx.totalFavorites }</span></Link>
            </li>
          ) }
          { isLoggedIn && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          ) }
          { isLoggedIn && (
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          ) }
        </ul>
      </nav>
    </header>
  );
}