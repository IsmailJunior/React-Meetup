import { useContext } from 'react';
import FavoritesContext from '../store/context';
import {MeetupList} from '../index'
export default function FavoritesPage ()
{
	const favoriteCtx = useContext( FavoritesContext );
	let content;
	if ( favoriteCtx.totalFavorites === 0 )
	{
		content = <p>You got no favorite yet. Start adding one?</p>
	} else
	{
		content = <MeetupList meetups={favoriteCtx.favorites} />
	}

	return (
		<section>
			<h1>My Favorites</h1>
			{content}
		</section>
	)
}