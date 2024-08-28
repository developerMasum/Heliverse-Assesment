// import { useState, useEffect } from "react";
// import axios from "axios";

// const Team = () => {
//   const [teamUsers, setTeamUsers] = useState<string[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     // Fetch IDs from localStorage
//     const localStorageData = localStorage.getItem("teamUsers");
//     const userIds = localStorageData ? JSON.parse(localStorageData) : [];

//     if (userIds.length > 0) {
//       // Fetch user data based on IDs
//       axios
//         .post("https://heliverse-server-eight.vercel.app/api/users/ids", {
//           ids: userIds,
//         })
//         .then((response) => {
//           setTeamUsers(response.data);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.error("Error fetching user data:", error);
//           setError("Failed to fetch user data.");
//           setLoading(false);
//         });
//     } else {
//       setLoading(false);
//     }
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="pt-40">
//       <h1>Team</h1>
//       <div>
//         {teamUsers.length > 0 ? (
//           teamUsers.map((user) => <div key={user._id}>{user.first_name}</div>)
//         ) : (
//           <div>No team users found.</div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Team;

const Team = () => {
  return <div>sd</div>;
};

export default Team;
