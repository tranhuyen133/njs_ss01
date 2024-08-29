import { Metadata } from 'next';
import Posts from '../bai1/page';

export const metadata: Metadata = {
  title: 'Danh sách bài viết',
  description: 'Xem danh sách các bài viết mới nhất.',
  keywords: ['blog', 'posts', 'danh sách bài viết'],
};

export default function PostsPage() {
  return <Posts />;
}
