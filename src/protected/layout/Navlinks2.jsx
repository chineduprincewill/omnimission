import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { TbLayoutDashboardFilled, TbLogs, TbReportAnalytics } from 'react-icons/tb';
import { MdOutlineAppRegistration, MdOutlineHomeRepairService, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineRateReview } from 'react-icons/md';
import { FaUserShield } from 'react-icons/fa';
import { HiOutlineChartPie, HiOutlineLightBulb, HiUser, HiUsers } from 'react-icons/hi';
import { RiOrganizationChart } from 'react-icons/ri';
import { FiKey, FiUsers } from 'react-icons/fi';
import { CiCalendar } from 'react-icons/ci';
import { RxDashboard } from 'react-icons/rx';

const Navlinks2 = () => {

    const locatn = useLocation();
    const [showsub, setShowsub] = useState();

    const navlinks = [
        {
            id: 1,
            title: "Dashboard",
            url: "/dashboard",
            icon: <RxDashboard size={17} />
        },
        {
            id: 2,
            title: "Membership Management",
            url: "/membership-management",
            icon: <FiUsers size={17} />,
            sub: [
                {
                    id: 1,
                    title: "Overview",
                    url: "/membership-management",
                },
                {
                    id: 2,
                    title: "Wings",
                    url: "/membership-management/wings",
                },
                {
                    id: 3,
                    title: "Groups",
                    url: "/membership-management/groups",
                },
                {
                    id: 4,
                    title: "Families",
                    url: "/membership-management/families",
                },
                {
                    id: 5,
                    title: "Members",
                    url: "/membership-management/members",
                },
            ]
        },
        {
            id: 3,
            title: "Volunteers & Skills",
            url: "/users",
            icon: <HiOutlineLightBulb size={17} />
        },
        {
            id: 4,
            title: "Events & Attendance",
            url: "/organisational-units",
            icon: <CiCalendar size={17} />
        },
        {
            id: 5,
            title: "Reports & Insights",
            url: "/reports",
            icon: <HiOutlineChartPie size={17} />
        },
        {
            id: 6,
            title: "Access Control",
            url: "/audit-logs",
            icon: <FiKey size={17} />
        },
        {
            id: 7,
            title: "Help and Support",
            url: "/audit-logs",
            icon: <FiKey size={17} />
        }
    ]

    return (
        <ul className='w-full'>
            {
                (navlinks !== null) && navlinks.map(nav => {
                    return (
                        <li key={nav.id} className={`grid py-0.5`}>
                            <div 
                                key={nav.id} 
                                className={`flex justify-start items-center space-x-3 my-1 p-2 text-white text-sm cursor-pointer hover:bg-selectedprimary ${(locatn.pathname === nav.url || locatn.pathname.includes(nav.url)) && 'bg-selectedprimary rounded-md'}`}
                            >
                                <span className={`${nav.url !== locatn.pathname && 'text-gray-400'}`}>{nav.icon}</span>
                                <Link to={nav.url}>{nav.title}</Link>
                            {
                                nav?.sub && 
                                    (showsub === nav.id ?
                                        <MdOutlineKeyboardArrowUp 
                                            size={25} className='mr-0' 
                                            onClick={() => setShowsub()}
                                        /> :
                                        <MdOutlineKeyboardArrowDown 
                                            size={25} className='mr-0' 
                                            onClick={() => setShowsub(nav.id)}
                                        />)
                            }
                            </div>
                        {
                            showsub && showsub === nav.id &&
                                <div className='w-full grid gap-2 rounded-md bg-selectedprimary mt-2 '>
                                {
                                    nav?.sub.map(sublink => (
                                        <Link to={sublink?.url} key={sublink?.id} className={`w-full text-white text-sm pl-12 py-2 rounded-md ${locatn.pathname === sublink?.url && 'bg-success'}`}>
                                        {sublink?.title}
                                        </Link>
                                    ))
                                }
                                </div>
                        }
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default Navlinks2
