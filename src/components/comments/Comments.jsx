import { useContext } from "react";
import "./comments.scss";

const Comments = () => {
  
  //Temporary
  const comments = [
    {
      id: 1,
      desc: "I am gonna fight with elon musk in cage",
      name: "Mark zukerburg",
      userId: 1,
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
    {
      id: 2,
      desc: "heyy dear! wasupp",
      name: "Elon musk",
      userId: 2,
      profilePicture:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/250px-Elon_Musk_Royal_Society_%28crop1%29.jpg",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src="" alt="" />
        <input type="text" placeholder="write a comment" />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;