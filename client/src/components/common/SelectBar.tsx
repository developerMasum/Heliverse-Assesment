import { useGetUsersQuery } from "@/redux/api/userApi/userApi";
import { TUser } from "@/utils";
import React from "react";

interface SelectBarProps {
  onSelectDomain: (value: string | undefined) => void;
  onSelectGender: (value: string | undefined) => void;
  onSelectAvailability: (value: string | undefined) => void;
}

const SelectBar: React.FC<SelectBarProps> = ({
  onSelectDomain,
  onSelectGender,
  onSelectAvailability,
}) => {
  const { data } = useGetUsersQuery({});
  const users = data?.users?.data?.result as TUser[];

  const staticDomains = Array.from(
    new Set(users.map((user) => user.domain))
  ) as string[];

  const staticGenders = Array.from(
    new Set(users.map((user) => user.gender))
  ) as string[];

  // Ensure availability is treated as a string for the select options
  const staticAvailabilityOptions = Array.from(
    new Set(users.map((user) => user.available.toString()))
  ) as string[];

  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <div className="w-32">
        <label
          htmlFor="domain"
          className="block text-sm font-medium text-gray-700"
        >
          Domain
        </label>
        <select
          id="domain"
          onChange={(e) => onSelectDomain(e.target.value || undefined)}
          className="mt-1 block w-full h-8 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Domain</option>
          {staticDomains.map((domain, index) => (
            <option key={index} value={domain}>
              {domain}
            </option>
          ))}
        </select>
      </div>

      <div className="w-32">
        <label
          htmlFor="gender"
          className="block text-sm font-medium text-gray-700"
        >
          Gender
        </label>
        <select
          id="gender"
          onChange={(e) => onSelectGender(e.target.value || undefined)}
          className="mt-1 block w-full h-8 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Gender</option>
          {staticGenders.map((gender, index) => (
            <option key={index} value={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div>

      <div className="w-40">
        <label
          htmlFor="availability"
          className="block text-sm font-medium text-gray-700"
        >
          Availability
        </label>
        <select
          id="availability"
          onChange={(e) => onSelectAvailability(e.target.value || undefined)}
          className="mt-1 block w-full h-8 border-gray-300 rounded-md shadow-sm text-black focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Select Availability</option>
          {staticAvailabilityOptions.map((option, index) => (
            <option key={index} value={option}>
              {option === "true" ? "Available" : "Not Available"}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SelectBar;
