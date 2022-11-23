import {useState, useEffect} from "react";
import { MeetupList } from "../index";

export default function AllMeetupsPage ()
{

  const [ isLoading, setIsLoading ] = useState( true );
  const [ loadedMeetups, setLoadedMeetups ] = useState( [] );
  
  useEffect( () =>
  {
    setIsLoading( true );
    fetch( 'https://react-5bcb3-default-rtdb.firebaseio.com/meetups.json' )
      .then( ( response ) =>
    {
      return response.json();
    } ).then( ( data ) =>
    {
      const meetups = [];
      for ( const key in data )
      {
        const meetup = {
          id: key,
          ...data[key]
        }

        meetups.push( meetup );
      }
      console.log( meetups );
      setIsLoading( false );
      setLoadedMeetups( meetups );
    } );
  }, [] );

  if ( isLoading )
  {
    return (
      <div>
        <h1>Loading</h1>
      </div>
    )
  }

	return (
		<section>
			<h1>All Meetup</h1>
        <MeetupList meetups={loadedMeetups} />
		</section>
	)
}