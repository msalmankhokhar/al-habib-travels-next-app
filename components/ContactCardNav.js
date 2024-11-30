import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function ContactCardNav({customClass="", title="Whatsapp Chat", icon=faWhatsapp, gray=false, value="+44203 504 2344", link="https://wa.me/442035042344?text=Hi", color="text-green-500"}) {
    return (
        <a href={link} target='_blank' className={`${gray ? 'bg-gray-200' : ''} ${customClass}`}>
            <div className={`${color} flex gap-3 items-center`}>
                <FontAwesomeIcon icon={icon} className={`${icon===faPhone ? 'h-7 w-7' : 'h-10 w-10'}`}/>
                <div className='flex flex-col gap-2'>
                    <div className='text-xs leading-none'>{title}</div>
                    <strong className='font-bold text-lg leading-none'>{value}</strong>
                </div>
            </div>
        </a>
    )
}
