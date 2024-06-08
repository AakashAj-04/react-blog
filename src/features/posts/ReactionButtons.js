import { useDispatch } from "react-redux";
import { reactionAdded } from "./postSlice";

const reactionsEmoji = {
  thumbsUp: "👍",
  wow: "😯",
  heart: "❤️",
  rocket: "🚀",
  coffee: "🍵",
};

const ReactionButtons = ({ item }) => {
  const dispatch = useDispatch();
  const reactionButton = Object.entries(reactionsEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type="button"
        className="reactionButton"
        onClick={() =>
          dispatch(reactionAdded({ postId: item.id, reaction: name }))
        }
      >
        {emoji}
        {item.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButton}</div>;
};

export default ReactionButtons;
