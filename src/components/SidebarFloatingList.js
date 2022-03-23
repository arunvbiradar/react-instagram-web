import React from 'react'
import ButtonUi from '../templates/ButtonUi'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableCells, faTableCellsLarge, faSquare, faUserTag, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function SidebarFloatingList() {
    return (
        <aside class="aside-floating">
            <div className='aside-icon-list'>
                <ul className='list-items'>
                    <li><a href="/"><FontAwesomeIcon icon={faTableCells} /></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faTableCellsLarge} /></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faSquare} /></a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faUserTag} /></a></li>
                </ul>
            </div>
            <div className='aside-add'>
                <ButtonUi><FontAwesomeIcon icon={faPlus} /></ButtonUi>
            </div>
        </aside>
    )
}
