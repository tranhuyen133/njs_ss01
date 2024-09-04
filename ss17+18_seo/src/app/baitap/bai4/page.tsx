import { useEffect, useState } from 'react';
import Image from 'next/image';

type Post = {
  id: number;
  title: string;
  
  thumbnailUrl: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('/baitap/bai1/api/posts');
      const data: Post[] = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{ width: '150px', textAlign: 'center' }}>
            <Image 
              src={post.thumbnailUrl} 
              alt={post.title} 
              width={150} 
              height={150} 
              layout="responsive" 
              quality={75} 
            />
            <p>{post.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
