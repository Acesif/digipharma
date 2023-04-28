import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
    <div className="list-group">
        <h4>User Panel</h4>
        <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action">
            Edit Profile
        </NavLink>
    </div>
    </>
  )
}

export default UserMenu