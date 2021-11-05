import React from 'react';

function List(groceries) {
  console.log(groceries);
  return (
    <ul className="list-group">
      {groceries.map(item => {
        <li className="list-group-item" key=
        {item.id}>        
        {item.name}        
        </li>
      })}
    </ul>
  );
}

export default List;
