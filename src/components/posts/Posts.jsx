import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Naveen sharma",
      userId: 1,
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://media.istockphoto.com/id/1368965646/photo/multi-ethnic-guys-and-girls-taking-selfie-outdoors-with-backlight-happy-life-style-friendship.jpg?s=170667a&w=0&k=20&c=Xwg_xkNp3mEBup6Khthbu4x6qW-tdRufcs1JSptWXxU=",
    },
    {
      id: 2,
      name: "navs",
      userId: 2,
      profilePic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg",
      desc:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, possimus! Eos earum adipisci nulla numquam quae? Autem, blanditiis quasi nobis maiores veniam asperiores!",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;