import './leftbar.scss'
import { Link } from 'react-router-dom'

const menuItems = [
  {
    id: 1,
    title: "",
    listItems: [
      {
        id: 1,
        title: "Naveen",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg",
      },
      {
        id: 2,
        title: "friends",
        icon: "https://icons-for-free.com/iconfiles/png/512/friends+list+list+network+icon-1320166594758812476.png",
      },
      {
        id: 3,
        title: "Messages",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Google_Messages_icon_%282022%29.svg/2048px-Google_Messages_icon_%282022%29.svg.png",
      },
      {
        id: 4,
        title: "Groups",
        icon: "https://cdn-icons-png.flaticon.com/512/166/166258.png",
      },
      {
        id: 5,
        title: "memories",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQO-EElrb69k45jWogzWUybarlSaVRwpzfnkxGa2iKgP038ihpL3YWTiRKXpA4Q-pgHY&usqp=CAU",
      },
      {
        id: 6,
        title: "Watch",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRElSXNtkrCzQpKl7L2A4OsZ4xf4G9fiK8NAHMl60jsIFy_ng3PC4pEcZUiFUBDWqUk1nc&usqp=CAU",
      }

    ],
  },
  {
    id: 2,
    title: "Your shortcuts",
    listItems: [
      {
        id: 1,
        title: "Events",
        icon: "https://w7.pngwing.com/pngs/253/892/png-transparent-computer-icons-calendar-date-event-table-calendar-text-rectangle.png",
      },
      {
        id: 2,
        title: "Gaming",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRns168xUqqHBRMpcZXkc-ejgX9M7k_69V9XQhgyPHUrudbpUBla2Ommfbs-m93AricDb0&usqp=CAU",
      },
      {
        id: 3,
        title: "Gallery",
        icon: "https://cdn-icons-png.flaticon.com/512/4503/4503941.png",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "https://cdn0.iconfinder.com/data/icons/apple-apps/100/Apple_Photos-512.png",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Setting",
        icon: "https://static-00.iconduck.com/assets.00/settings-icon-1964x2048-8nigtrtt.png",
      },
      {
        id: 2,
        title: "Privacy",
        icon: "https://cdn-icons-png.flaticon.com/512/6672/6672221.png",
      },
      {
        id: 3,
        title: "Logout",
        icon: "https://cdn3.vectorstock.com/i/1000x1000/99/77/logout-icon-vector-13489977.jpg",
      },

    ],
  },


]

function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="menu">
        {menuItems.map(item => (
          
          <div className="item" key={item.id}>
            <span className="title">{item.title}</span>
            {item.listItems.map(listItem => (
              <Link  className='listItem' key={listItem.id}>
                <img src={listItem.icon}/>
                <span className='listItemTitle'>{listItem.title}</span>
              </Link>))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Leftbar