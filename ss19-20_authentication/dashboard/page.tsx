// app/dashboard/page.tsx or pages/dashboard.tsx
import { useAuth, RedirectToSignIn } from '@clerk/nextjs';

const Dashboard = () => {
  const { isSignedIn } = useAuth();

  // Redirect to the sign-in page if the user is not signed in
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

  return (
    <div>
      <h1>Protected Route</h1>
      <p>Welcome to your dashboard. Only logged-in users can see this.</p>
    </div>
  );
};

export default Dashboard;
