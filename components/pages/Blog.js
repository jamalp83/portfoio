import post from '../Posts';

export default function Blog(state){
    return state
        .posts
        .map(post)
        .join('');
}

