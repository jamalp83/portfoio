export default function Posts(post){
    return `
        
        <div>
            <h1>${post.userId}</h1>

            <h3>${post.body}</h3>
        </div>
    
    `;
}