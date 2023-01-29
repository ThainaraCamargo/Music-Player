import React from 'react';
import './style.css';
import SidebarButton from '../../components/sidebarButton';
import {MdFavorite} from 'react-icons/md';
import {MdSpaceDashboard} from 'react-icons/md';
import {MdLibraryMusic} from 'react-icons/md';
import {FiPlay} from 'react-icons/fi';
import {FaSignOutAlt} from 'react-icons/fa';
import Library from '../../screens/library';

export default function Sidebar() {
  return (
    <div className="sideContainer">
      <img src="/user.png" className='profile-img' alt='profile'/>
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}/>
        <SidebarButton title="Player" to="/player" icon={<FiPlay/>}/>
        <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite/>}/>
        <SidebarButton title="Library" to="/" icon={<MdLibraryMusic/>}/>
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}/>
    </div>
  )
}
