import React from 'react'
import { MenuList } from './menu-list';
import './styles.css';

export const MenuUI = ({ menus = [] }) => {
  return (
    <div className="menu-ui-container">
      <MenuList list={menus} />
    </div>
  )
}
 