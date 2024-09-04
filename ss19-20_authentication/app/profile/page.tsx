import { currentUser } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const user = await currentUser();

  if (!user) {
    return <p>Not logged in.</p>;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Name: {user.fullName}</p>
      <p>Email: {user.emailAddresses[0].emailAddress}</p>
    </div>
  );
}
