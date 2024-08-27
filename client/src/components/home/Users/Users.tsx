import UserCard from "./UserCard";

const users = [
  {
    id: 12,
    first_name: "Deloris",
    last_name: "Evered",
    email: "deveredb@ovh.net",
    gender: "Female",
    avatar:
      "https://robohash.org/blanditiiscumqueimpedit.png?size=50x50&set=set1",
    domain: "UI Designing",
    available: false,
  },
  // You can add more user objects here
];

const User: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default User;
