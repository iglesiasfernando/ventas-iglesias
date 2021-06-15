import React from 'react';
import ItemCount from '../ItemCount';
function ItemListContainer({greeting}) {
    return (
        <div>
            {greeting}

          {/* <ItemCount stock="5" initial="1"></ItemCount>*/}
        </div>)
}

export default ItemListContainer;