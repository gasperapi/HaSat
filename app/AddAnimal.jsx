import React, { useState } from "react";

function AddAnimal({ onClose }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, color, description });
    onClose(); // ปิดฟอร์มหลังจากส่งข้อมูล
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 text-center">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Animal</h3>
          <form className="mt-2" onSubmit={handleSubmit}>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-2 w-full border rounded-md"
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="px-4 py-2 w-full border rounded-md"
              />
            </div>
            <div className="mt-4">
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="px-4 py-2 w-full border rounded-md"
              />
            </div>
            <div className="items-center px-4 py-3">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="items-center px-4 py-3">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAnimal;
