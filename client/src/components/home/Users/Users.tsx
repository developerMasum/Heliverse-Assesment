/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import SearchBar from "@/components/common/SearchBar";
import SelectBar from "@/components/common/SelectBar";
import { useGetUsersQuery } from "@/redux/api/userApi/userApi";
import { TUser } from "@/utils";
import ReactPaginate from "react-paginate";
import Loader from "@/lib/Loader";
import { Zoom } from "react-awesome-reveal";
import assets from "@/assets";
import Modal from "@/components/common/Modal";
import AddUserForm from "@/components/common/AddUserForm";
const User = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDomain, setSelectedDomain] = useState<string | undefined>();
  const [selectedGender, setSelectedGender] = useState<string | undefined>();
  const [selectedAvailability, setSelectedAvailability] = useState<
    string | undefined
  >();
  const [filteredUsers, setFilteredUsers] = useState<TUser[]>([]);
  const [, setDomains] = useState<string[]>([]);
  const [, setGenders] = useState<string[]>([]);
  const [, setAvailabilityOptions] = useState<string[]>([]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 20;
  const [, setLoadingPage] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data, isLoading, refetch } = useGetUsersQuery({
    gender: selectedGender,
    available: selectedAvailability,
    domain: selectedDomain,
    page: currentPage + 1, // API pages are often 1-indexed
    limit: itemsPerPage,
  });

  const users = data?.users?.data?.result;
  const metaData = data?.users?.data?.meta;

  useEffect(() => {
    if (users) {
      setDomains(Array.from(new Set(users.map((user: TUser) => user.domain))));
      setGenders(Array.from(new Set(users.map((user: TUser) => user.gender))));
      setAvailabilityOptions(
        Array.from(new Set(users.map((user: TUser) => user.available)))
      );

      const filtered = users.filter(
        (user: TUser) =>
          user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setFilteredUsers(filtered);
      setLoadingPage(false);
    }
  }, [
    users,
    searchQuery,
    selectedDomain,
    selectedGender,
    selectedAvailability,
  ]);

  useEffect(() => {
    setLoadingPage(true);
    refetch();
  }, [
    searchQuery,
    selectedDomain,
    selectedGender,
    selectedAvailability,
    currentPage,
    refetch,
  ]);

  const handlePageChange = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  const handleAddUser = (user: TUser) => {
    console.log("User Added:", user);
    setIsModalOpen(false);
  };

  const pageCount = metaData ? metaData.totalPage : 0;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(0); // Reset to first page on search
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="pt-5">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="w-full md:w-auto">
          <SearchBar onSearch={handleSearch} />
          <div className="p-4">
            <SelectBar
              onSelectDomain={setSelectedDomain}
              onSelectGender={setSelectedGender}
              onSelectAvailability={setSelectedAvailability}
            />
          </div>
        </div>
        <div
          className="cursor-pointer flex justify-center items-center gap-6 bg-[#0E7490] w-full md:w-48 px-1 py-3 rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          <p className="text-xl font-bold text-white text-center">ADD USERS</p>
          <Zoom delay={200}>
            <img
              src={assets.images.add}
              alt="Add"
              className="w-14 h-14 rounded-full border-4 border-white"
            />
          </Zoom>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-6 justify-items-center">
        {filteredUsers.map((user) => (
          <div key={user._id}>
            <UserCard {...user} />
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center pt-12 pb-12">
        <ReactPaginate
          previousLabel={"«"}
          nextLabel={"»"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-bold mb-4">Add New User</h2>
        <AddUserForm onSubmit={handleAddUser} isModalClose={setIsModalOpen} />
      </Modal>
    </div>
  );
};

export default User;
