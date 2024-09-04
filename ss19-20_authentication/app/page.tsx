'use client'
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';

export default function HomePage() {
  const { isSignedIn } = useUser();

  return (
    <div>
      {isSignedIn ? (
        <>
          <SignOutButton>
            <button>Đăng xuất</button>
          </SignOutButton>
          <p>Trang đã đăng nhập</p>
        </>
      ) : (
        <>
          <SignInButton>
            <button>Đăng nhập</button>
          </SignInButton>
          <p>Trang chưa đăng nhập</p>
        </>
      )}
    </div>
  );
}
