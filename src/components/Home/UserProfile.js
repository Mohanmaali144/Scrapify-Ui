import axios from "axios";
import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import Api from "../WebApi";

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
            <header className="bg-white shadow-lg p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <h1 className="text-2xl font-semibold text-gray-800">User Profile</h1>
                    {editMode ? (
                        <div>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-md mr-2" onClick={handleSaveChanges}>
                                Save
                            </button>
                            <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md" onClick={handleCancelEdit}>
                                Cancel
                            </button>
                        </div>
                    ) : (
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-md" onClick={handleEditProfile}>
                            Edit Profile
                        </button>
                    )}
                </div>
            </header>

            <div className="max-w-custom mx-auto mt-10 bg-white p-8 rounded shadow-md">
                <div className="mb-4">
                    <div className="edit-container">
                        <h3 className="text-lg font-semibold">Username</h3>
                    </div>
                    <input
                        type="text"
                        id="username"
                        value={formData.username}
                        className="input-field mt-5 mb-5 bg-gray-100 text-gray-700 border border-gray-300 p-3 w-64"
                        disabled={!editMode}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <div className="edit-container">
                        <h3 className="text-lg font-semibold">Mobile Number</h3>
                    </div>
                    <input
                        type="text"
                        id="contact"
                        value={formData.contact}
                        className="input-field mt-5 mb-5 bg-gray-100 text-gray-700 border border-gray-300 p-3 w-64"
                        disabled={!editMode}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <div className="edit-container">
                        <h3 className="text-lg font-semibold">Email Address</h3>
                    </div>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        className="input-field mt-5 mb-7 bg-gray-100 text-gray-700 border border-gray-300 p-3 w-64"
                        disabled
                    />
                </div>
            </div>
        </>
}
