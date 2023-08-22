import './stories.scss'



function Stories() {
    //temp users just for UI will use context api for user in 1 tut and then fetch real data during backend
    const userStory = [
        {
            id: 1,
            name: "naveen",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg"
        },
        {
            id: 2,
            name: "naveen",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg"
        },
        {
            id: 3,
            name: "naveen",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg"
        },
        {
            id: 4,
            name: "naveen",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg"
        },
        {
            id: 5,
            name: "naveen",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg"
        },
        {
            id: 6,
            name: "naveen",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg"
        },

    ]

    return (
        <div className='stories'>
            <div className="story">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Naveen_sharma.jpg/800px-Naveen_sharma.jpg" alt="" />
                <span>username</span>
                <button>+</button>
            </div>
            {
                userStory.map(story => (
                    <div className="story" key={story.id}>
                        <img src={story.img} alt="" />
                        <span>{story.name}</span>
                    </div>
                ))
            }
        </div>

    )
}

export default Stories