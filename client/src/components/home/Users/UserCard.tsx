import React from "react";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  domain: string;
  available: boolean;
}

const UserCard: React.FC<User> = ({
  first_name,
  last_name,
  email,
  gender,
  avatar,
  domain,
  available,
}) => {
  return (
    <div
      className="w-64 h-80 bg-white shadow-lg rounded-xl m-4"
      style={{ perspective: "1000px" }}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group">
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden bg-teal-600 flex flex-col items-center justify-center p-4 rounded-xl group-hover:rotate-y-180">
          <img
            src={avatar}
            alt={`${first_name} ${last_name}`}
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <h2 className="mt-4 text-lg font-semibold text-white">
            {first_name} {last_name}
          </h2>
          <p className="text-sm text-blue-200">{domain}</p>
          <p
            className={`mt-2 text-sm ${
              available ? "text-green-400" : "text-red-300"
            }`}
          >
            {available ? "Available" : "Not Available"}
          </p>
        </div>
        Back Side
        {/* <div className="absolute w-full h-full bg-gray-100 rounded-xl backface-hidden transform rotate-y-180 flex flex-col items-center justify-center p-4 group-hover:rotate-y-0">
          <h3 className="text-lg font-semibold text-gray-700">Contact Info</h3>
          <p className="mt-2 text-sm text-gray-500">{email}</p>
          <p className="text-sm text-gray-500">Gender: {gender}</p>
        </div> */}
      </div>
    </div>
  );
};

export default UserCard;
