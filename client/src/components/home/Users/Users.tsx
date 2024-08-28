/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from "react";
import UserCard from "./UserCard";
import SearchBar from "@/components/common/SearchBar";
import SelectBar from "@/components/common/SelectBar";
import { useGetUsersQuery } from "@/redux/api/userApi/userApi";
import { TUser } from "@/utils";

const User: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string | undefined>();
  const [selectedGender, setSelectedGender] = useState<string | undefined>();
  const [selectedAvailability, setSelectedAvailability] = useState<
    string | undefined
  >();
  const [filteredUsers, setFilteredUsers] = useState<TUser[]>([]);
  const [domains, setDomains] = useState<string[]>([]);
  const [, setGenders] = useState<string[]>([]);
  const [, setAvailabilityOptions] = useState<string[]>([]);

  const { data, isLoading, refetch } = useGetUsersQuery({
    gender: selectedGender,
    available: selectedAvailability,
    domain: selectedDomain,
  });
  const users = data?.users?.data?.result;
  useEffect(() => {
    if (users) {
      // const users = data.users.data.result;

      // Update options
      setDomains(Array.from(new Set(users.map((user: TUser) => user.domain))));
      setGenders(Array.from(new Set(users.map((user: TUser) => user.gender))));
      setAvailabilityOptions(
        Array.from(new Set(users.map((user: TUser) => user.available)))
      );
      console.log(domains);
      // Update filtered users
      setFilteredUsers(
        users.filter(
          (user: TUser) =>
            user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [data, searchQuery, selectedDomain, selectedGender, selectedAvailability]);

  useEffect(() => {
    refetch(); // Refetch data when filters or search query changes
  }, [
    searchQuery,
    selectedDomain,
    selectedGender,
    selectedAvailability,
    refetch,
  ]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div className="p-4">
        <SelectBar
          onSelectDomain={setSelectedDomain}
          onSelectGender={setSelectedGender}
          onSelectAvailability={setSelectedAvailability}
        />
      </div>
      <div className="flex flex-wrap justify-around items-start">
        {filteredUsers.map((user) => (
          <div key={user._id}>
            <UserCard {...user} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default User;
