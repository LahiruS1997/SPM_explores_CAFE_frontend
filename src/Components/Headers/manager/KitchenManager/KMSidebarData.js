import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io' 
import * as FiIcons from 'react-icons/fi'
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'
import * as BsIcons from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/viewnew',
        icon: <RiIcons.RiDashboardLine />
    },
    {
        title: 'Menu',
        icon: <BiIcons.BiFoodMenu />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Add Foods',
                path: '/menu/addnewfood',
                icon: <BsIcons.BsPeopleFill />,
            },
            {
                title: 'Manage Foods',
                path: '/menu/foods',
                icon: <BsIcons.BsPeopleFill />,
            },
        ]
    },     
    {
        title: 'Ready To Pickup Orders',
        path: '/ready',
        icon: <FaIcons.FaClipboardList />
    },
    {
        title: 'Confirmed Orders',
        path: '/messages',
        icon: <FiIcons.FiCheck />
    },
    {
        title: 'Rejected Orders',
        path: '/messages',
        icon: <AiIcons.AiOutlineStop />
    },
    {
        title: 'Reports',
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Order Reports',
                path: '/reports/reports1',
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: 'Foods Reports',
                path: '/reports/reports2',
                icon: <IoIcons.IoIosPaper />,
            },
           
        ]
    },
    {
        title: 'View Todays Menu',
        path: '/messages',
        icon: <BiIcons.BiFoodMenu />
    },{
        title: 'Messages',
        path: '/messages',
        icon: <AiIcons.AiOutlineMessage />
    },
]