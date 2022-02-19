import { ContentPost } from "../ContentPost/index";
import { ImagemPost } from "../ImagemPost";
import './styles.css';

export const PostCard = ({x}) => {
    return (
         <div className = "post" >
            <ImagemPost x={x} />
            <ContentPost x={x} />
        </div >
    );
}   