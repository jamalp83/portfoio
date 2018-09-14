import Post from '../Posts';

export default function Blog(posts){
    return posts
        .map(Post)
        .join('');
}

