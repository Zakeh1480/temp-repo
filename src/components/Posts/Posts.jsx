import { PostCard } from "../PostCard";
import './styles.css';

export const Posts = ( { posts }) => {
    return(
        <div className="posts">
          {posts.map(x => (
            <PostCard x={x} />
          ))}
        </div>
    );
}