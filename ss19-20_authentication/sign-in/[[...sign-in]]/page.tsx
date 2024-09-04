import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';

export default function HomePage() {
  const { isSignedIn, signOut } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push('/sign-in');
  };

  return (
    <div>
      {isSignedIn ? (
        <>
          <button onClick={handleLogout}>Đăng xuất</button>
          <p>Trang đã đăng nhập</p>
        </>
      ) : (
        <>
          <p>Trang chưa đăng nhập</p>
        </>
      )}
    </div>
  );
}
