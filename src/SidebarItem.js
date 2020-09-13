import React from 'react'

function SidebarItem({name,active,handelClick}) {
    return (
        <div>
            <button 
            className={`sidebar-item ${active?'active':''}`}
            onClick={handelClick} >
            {name}
            </button>
        </div>
    )
}

export default SidebarItem
