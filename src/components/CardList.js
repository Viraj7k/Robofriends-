import React from 'react';
import Card from './Card'
const CardList = ({robots}) => {
	const cardComponent = robots.map((user, i) => {
		return (
		<Card 
		  key={i} 
		  id={robots[i].id} 
		  name={robots[i].name} 
		  email={robots[i].email}>
		</Card>
	    );
	})
	return (
		<div> 
			{cardComponent}
		</div>
	)
}

export default CardList;

// ALTERNATIVE WAY PUTTING THE JS CODE INSIDE THE <DIV></DIV>

// const CardList = ({robots}) => {
// 	return (
// 		<div>
// 		{
// 		 robots.map((user, i) => {
// 			return (
// 			 <Card 
// 		  		key={i} 
// 		  		id={robots[i].id} 
// 		  		name={robots[i].name} 
// 		  		email={robots[i].email}>
// 			 </Card>
// 	    );
// 	  })
//     }
//    </div>
//   );
// }
// export default CardList;