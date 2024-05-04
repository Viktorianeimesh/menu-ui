import React, { useState } from 'react';
import { MenuList } from './menu-list';
import {FaMinus, FaPlus} from 'react-icons/fa';

export const MenuItem = ({ item }) => {
  const [displayedCurrentChildren, setDisplayedCurrentChildren] = useState({});

  function handleToggleChildren(currentLabel) {
    setDisplayedCurrentChildren({
      ...displayedCurrentChildren,
      [currentLabel]: !displayedCurrentChildren[currentLabel]
    })
  }
  
  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ?
          <span onClick={() => handleToggleChildren(item.label)}>
            {
              displayedCurrentChildren[item.label] 
                ? <FaMinus color="#fff" size={25} /> 
                : <FaPlus color="#fff" size={25} />
            }
          </span> : null}
      </div>
     

      {
        item && item.children && item.children.length > 0 && displayedCurrentChildren[item.label]
        ? <MenuList list={item.children} />
        : null
      }
    </li>
  )
}
