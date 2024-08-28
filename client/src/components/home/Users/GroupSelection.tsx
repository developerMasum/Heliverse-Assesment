import React, { useState, useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  available: boolean;
  domain: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

const UserSelection: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [team, setTeam] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://heliverse-server-eight.vercel.app/api/users"
        );
        setUsers(response.data.data.result);
      } catch (error) {
        setError("Failed to fetch users");
      }
    };

    fetchUsers();
  }, []);

  const handleAddToTeam = (user: User) => {
    const isDomainTaken = team.some(
      (teamMember) => teamMember.domain === user.domain
    );
    if (!isDomainTaken && user.available) {
      setTeam([...team, user]);
    } else {
      alert("Cannot add user with the same domain or unavailable user.");
    }
  };

  const handleRemoveFromTeam = (userId: string) => {
    setTeam(team.filter((user) => user._id !== userId));
  };

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Select Users to Create a Team</h2>
      <div className="flex flex-wrap justify-center">
        {users.map((user) => (
          <div key={user._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
            <UserCard {...user} />
            <button
              onClick={() => handleAddToTeam(user)}
              disabled={
                !user.available ||
                team.some((teamMember) => teamMember.domain === user.domain)
              }
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Add to Team
            </button>
          </div>
        ))}
      </div>

      <h2 className="mt-10">Selected Team</h2>
      <div className="flex flex-wrap justify-center">
        {team.map((user) => (
          <div key={user._id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
            <UserCard {...user} />
            <button
              onClick={() => handleRemoveFromTeam(user._id)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
            >
              Remove from Team
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSelection;
