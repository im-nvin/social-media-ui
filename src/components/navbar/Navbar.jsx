import { Link } from 'react-router-dom';
import './navbar.scss'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { menulist } from '../../menudata'
import SettingsIcon from '@mui/icons-material/Settings';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PersonIcon from '@mui/icons-material/Person';
import HomeIcon from '@mui/icons-material/Home';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import LogoutIcon from '@mui/icons-material/Logout';


function Navbar() {
  const { toggle, darkMode } = useContext(DarkModeContext)

  const menulist = [

    {
      id: 1,
      title: "Home",
      icon: <HomeIcon />
    },
    {
      id: 2,
      title: "Profile",
      icon: <PersonIcon />
    },

    {
      id: 3,
      title: "Posts",
      icon: <PostAddIcon />,

    },
    {
      id: 4,
      title: "Settings",
      icon: <SettingsIcon />
    },
    {
      id:5,
      title:"Logout",
      icon:<LogoutIcon />
    }
  ];
  return (
    <div className='navbar'>
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className='logo'>DeVBook</span>
        </Link>

        <div className="search">
          <SearchOutlinedIcon className='icon' />
          <input type="text" placeholder='search...' />
        </div>

      </div>

      <div className="right">

        <HomeOutlinedIcon className='icon' />

        {/* for changing dark mode and light mode icon */}
        {darkMode ? <DarkModeOutlinedIcon className='icon' onClick={toggle} /> : <LightModeIcon onClick={toggle} className='icon' />
        }        <div className="friendReq">
          <GroupAddIcon className='icon' />
          <span className='notival'>10</span>
        </div>
        <div className="notification">
          <NotificationsNoneOutlinedIcon className='icon' />
          <span className='notival'>10</span>
        </div>
        <div className="msg">
          <ChatIcon className='icon' />
          <span className='notival'>10</span>
        </div>


        <div className="user">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg" />
          <span>Naveen</span>
        </div>
        <div className="menu">
          <ArrowDropDownIcon className='icon' />
          <div className="menulist">
            {menulist.map(item => (
              <div className="listitem" key={item.id}>
                <div className="listIcon">{item.icon}</div>
                <span className="listItemTitle">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>

  )
}

export default Navbar