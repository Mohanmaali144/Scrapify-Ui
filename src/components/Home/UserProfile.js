import axios from "axios";
import { TextInput } from "flowbite-react";
import React, { useContext, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { MdOutlineDownloadDone } from "react-icons/md";
import { UserContext } from "../../App";
import Api from "../WebApi";
import UpdateAddress from "../ui/UpdateAddress";

export default function UserProfile() {
    const { user, setUser } = useContext(UserContext);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        username: user ? user.username : "",
        contact: user ? user.contact : "",
        email: user ? user.email : ""
    });

    const handleEditProfile = () => {
        setEditMode(true);
    };

    const handleCancelEdit = () => {
        setEditMode(false);
        setFormData({
            username: user ? user.username : "",
            contact: user ? user.contact : "",
            email: user ? user.email : ""
        });
    };

    const handleSaveChanges = async () => {
        try {
            const { username, contact } = formData;

            const response = await axios.post(Api.updateUserDetails, {
                userId: user._id,
                username,
                contact
            });

            console.log(response.data);

            setUser({ ...user, username, contact });

            setEditMode(false);
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    return <>
        <div className="flex flex-col md:flex-row justify-around  font-oswald text-gray-700 w-full items-start">
            <div className="max-w-sm mx-auto mt-2  bg-[#fdf4ff] p-8 rounded-xl shadow-md">
                <div className="mb-4">
                    <div className="edit-container flex justify-between items-center">
                        <h3 className="text-md ">Username</h3>
                        <h3 className="text-3xl "> {editMode ? (
                            <div className="flex justify-center items-center">
                                <MdOutlineDownloadDone className="mr-3" onClick={handleSaveChanges} />
                                <IoMdCloseCircle onClick={handleCancelEdit} />
                            </div>
                        ) : (
                            <FaUserEdit onClick={handleEditProfile} />
                        )}</h3>
                    </div>
                    <TextInput
                        type="text"
                        id="username"
                        className="mt-2"
                        value={formData.username}
                        disabled={!editMode}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <div className="edit-container">
                        <h3 className="text-md">Mobile Number</h3>
                    </div>
                    <TextInput
                        type="text"
                        id="contact"
                        value={formData.contact}
                        disabled={!editMode}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <div className="edit-container">
                        <h3 className="text-md">Email Address</h3>
                    </div>
                    <TextInput
                        type="email"
                        id="email"
                        value={formData.email}
                        disabled
                    />
                </div>

            </div>
            <div className="sm:w-3/4 flex justify-center items-center w-full">
                <UpdateAddress />
            </div>
        </div>
    </>
}
