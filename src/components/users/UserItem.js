import { useState } from 'react';

/** User Card  */
const UserItem = props => {
	return (
		<div className="card text-center">
			<img className="round-img" src={props.avatar} alt="avatar image" srcset={props.avatar} />
			<h3>{props.login}</h3>
			<div>
				<a href={props.html} className="btn btn-dark btn-sm my-1">
					More
				</a>
			</div>
		</div>
	);
};

export default UserItem;
