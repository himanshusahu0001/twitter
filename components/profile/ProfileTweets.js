import { AiTwotoneSetting } from "react-icons/ai";
import Post from "../Post";

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
};

const tweets = [
  {
    displayName: "Happy",
    userName: "0xslkdfj3kl3jlk23j42l3kj",
    avatar:
      "https://cdn-wp.thesportsrush.com/2020/07/john-cena-goes.jpg?w=3840&q=60",
    text: "ljkdsafj skldfjskladjflkasdjflksdfjlkdsajf lksadjf lksd jflksdf jlsakdfj lksad jflk sd",
    isProfileImageNft: true,
    timestamp: "2023-06-01T12:00:00.000z",
  },
  {
    displayName: "Happy",
    userName: "0xslkdfj3kl3jlk23j42l3kj",
    avatar:
      "https://cdn-wp.thesportsrush.com/2020/07/john-cena-goes.jpg?w=3840&q=60",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000z",
  },
  {
    displayName: "Happy",
    userName: "0xslkdfj3kl3jlk23j42l3kj",
    avatar:
      "https://cdn-wp.thesportsrush.com/2020/07/john-cena-goes.jpg?w=3840&q=60",
    text: "gm",
    isProfileImageNft: false,
    timestamp: "2020-06-01T12:00:00.000z",
  },
];

const ProfileTweets = () => {
  return (
    <div className={style.wrapper}>
      {tweets.map((tweet, index) => (
        <Post
          key={index}
          displayName={tweet.displayName}
          userName={`${tweet.userName.slice(0, 4)}...${tweet.userName.slice(
            -4
          )}`}
          isProfileImageNft={tweet.isProfileImageNft}
          text={tweet.text}
          timestamp={tweet.timestamp}
          avatar={tweet.avatar}
        />
      ))}
    </div>
  );
};

export default ProfileTweets;
