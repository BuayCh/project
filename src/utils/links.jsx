import { CircleGauge, FolderKanban, House, LogIn  } from "lucide-react";
import { href } from "react-router";

export const sidebarLink =[
    // {href:'/', label:'Home'},
    // {href:'about', label:'About'},
    // {href:'admin/booking', label:'Booking'},
    // {href:'/user/login', label:'Login'},
    { label: "Home", href: "/", icon: <House /> },
    { label: "Dashboard", href: "/admin", icon: <CircleGauge /> },
  { label: "Manage", href: "/admin/manage",icon:<FolderKanban /> },
]
export const dropdownLink =[
    {href:'/', label:'Home'},
    {href:'/albums', label:'Albums'},
    {href:'/contact', label:'Contact'},
    {href:'/login', label:'Login'},
]
export const dropdownUser =[
    {href:'/', label:'Home'},
    {href:'/albums', label:'Albums'},
    {href:'/contact', label:'Contact'},
]