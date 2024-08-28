import React, { useState } from "react";
import {
  useDeleteUserMutation,
  useUpdateUserMutation,
} from "@/redux/api/userApi/userApi";
import { Zoom } from "react-awesome-reveal";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import assets from "@/assets";

interface User {
  _id: string;
  first_name: string;
  last_name: string;
  avatar: string;
  domain: string;
  available: boolean;
}

const UserCard: React.FC<User> = ({
  _id,
  first_name,
  last_name,
  avatar,
  domain,
  available,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updatedFirstName, setUpdatedFirstName] = useState(first_name);
  const [updatedLastName, setUpdatedLastName] = useState(last_name);
  const [updatedDomain, setUpdatedDomain] = useState(domain);
  const [updatedAvailable, setUpdatedAvailable] = useState(available);

  const [deleteUser] = useDeleteUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const handleDeleteUser = async () => {
    await deleteUser(_id);
  };

  const handleUpdateUser = async () => {
    await updateUser({
      id: _id,
      updateData: {
        first_name: updatedFirstName,
        last_name: updatedLastName,
        domain: updatedDomain,
        available: updatedAvailable,
      },
    });
    setIsModalOpen(false);
  };

  return (
    <div
      className="w-72 h-96 bg-white shadow-lg rounded-xl m-4"
      style={{ perspective: "1000px" }}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group">
        <div className="absolute w-full h-full backface-hidden bg-cyan-700 flex flex-col items-center justify-center p-4 rounded-xl group-hover:rotate-y-180">
          <Zoom delay={200}>
            <img
              src={avatar}
              alt={`${first_name} ${last_name}`}
              className="w-24 h-24 rounded-full border-4 border-white"
            />
          </Zoom>
          <h2 className="mt-4 text-lg font-semibold text-white">
            {first_name} {last_name}
          </h2>
          <p className="text-sm text-blue-200">{domain}</p>
          <p
            className={`mt-2 text-sm ${
              available ? "text-green-400" : "text-red-400"
            }`}
          >
            {available ? "Available" : "Not Available"}
          </p>

          <div className="mt-4 flex justify-center gap-6">
            <img
              onClick={() => setIsModalOpen(true)}
              className="w-8 h-8 mt-2  cursor-pointer"
              src={assets.images.edit}
              alt="Edit"
            />

            <img
              onClick={handleDeleteUser}
              className="w-8 h-8 mt-2 cursor-pointer text-red-700"
              src={assets.images.bin}
              alt="Delete"
            />
          </div>
          <Button className="mt-4 mx-2 text-sm font-sans uppercase">
            add to team
          </Button>
        </div>
      </div>

      {/* Update Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogTrigger />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Update User</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="first_name" className="text-right">
                First Name
              </Label>
              <Input
                id="first_name"
                value={updatedFirstName}
                onChange={(e) => setUpdatedFirstName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="last_name" className="text-right">
                Last Name
              </Label>
              <Input
                id="last_name"
                value={updatedLastName}
                onChange={(e) => setUpdatedLastName(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="domain" className="text-right">
                Domain
              </Label>
              <Input
                id="domain"
                value={updatedDomain}
                onChange={(e) => setUpdatedDomain(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="available" className="text-right">
                Available
              </Label>
              <Input
                id="available"
                type="checkbox"
                checked={updatedAvailable}
                onChange={(e) => setUpdatedAvailable(e.target.checked)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleUpdateUser}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserCard;
