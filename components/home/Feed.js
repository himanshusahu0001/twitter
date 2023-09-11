import { BsStars } from "react-icons/bs"
import TweetBox from "./TweetBox"
import Post from "../Post"

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }

const tweets = [
    {
        displayName : "Happy",
        userName : "0xslkdfj3kl3jlk23j42l3kj",
        avatar : "https://cdn-wp.thesportsrush.com/2020/07/john-cena-goes.jpg?w=3840&q=60",
        text : "ljkdsafj skldfjskladjflkasdjflksdfjlkdsajf lksadjf lksd jflksdf jlsakdfj lksad jflk sd" ,
        isProfileImageNft : true,
        timestamp : '2023-06-01T12:00:00.000z'
    },
    {
        displayName : "Happy",
        userName : "0xslkdfj3kl3jlk23j42l3kj",
        avatar : "https://cdn-wp.thesportsrush.com/2020/07/john-cena-goes.jpg?w=3840&q=60",
        text : "gm",
        isProfileImageNft : false,
        timestamp : '2020-06-01T12:00:00.000z'
    },
    {
        displayName : "Happy",
        userName : "0xslkdfj3kl3jlk23j42l3kj",
        avatar : "https://cdn-wp.thesportsrush.com/2020/07/john-cena-goes.jpg?w=3840&q=60",
        text : "gm",
        isProfileImageNft : false,
        timestamp : '2020-06-01T12:00:00.000z'
    },
]

function Feed() {
  return (

    <div className={`${style.wrapper} no-scrollbar`}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStars/>
        </div>
        <TweetBox/>
        {tweets.map((tweet, index)=>{
            return <Post 
                key={index}
                displayName={tweet.displayName}
                userName={`${tweet.userName.slice(0,4)}...${tweet.userName.slice(-4)}`}
                isProfileImageNft = {tweet.isProfileImageNft}
                text = {tweet.text}
                timestamp = {tweet.timestamp}
                avatar={tweet.avatar}
            />
        })}
    </div>

  )
}

export default Feed