import { Card } from '../../index';
import classes from './MeetupItem.module.css'

export default function MeetupItem ( props )
{
	return (
		<li className={ classes.list }>
		<Card>
		<div className={classes.image}>
			<img src={props.image} alt={props.title} />
		</div>

		<div className={classes.content}>
				<h3>{props.title}</h3>	
				<address>{props.address}</address>
				<p>{props.description}</p>
			</div>
			<div className={classes.actions}>
				<button>To Favorites</button>
				</div>
				</Card>
			</li>
	)
}