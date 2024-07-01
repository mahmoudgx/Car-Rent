import React, { useState } from "react";
import Select from "react-select";
import emailjs from "emailjs-com";

const locations = [
  { value: "Al Barsha", label: "Al Barsha" },
  { value: "Al Furjan", label: "Al Furjan" },
  { value: "Al Karama", label: "Al Karama" },
  { value: "Al Quoz", label: "Al Quoz" },
  { value: "Al Sufouh", label: "Al Sufouh" },
  { value: "Arabian Ranches", label: "Arabian Ranches" },
  { value: "Business Bay", label: "Business Bay" },
  { value: "DIFC", label: "DIFC (Dubai International Financial Centre)" },
  { value: "Discovery Gardens", label: "Discovery Gardens" },
  { value: "Downtown Dubai", label: "Downtown Dubai" },
  { value: "Dubai Marina", label: "Dubai Marina" },
  { value: "Dubai Silicon Oasis", label: "Dubai Silicon Oasis" },
  { value: "Emirates Hills", label: "Emirates Hills" },
  { value: "JBR", label: "Jumeirah Beach Residence (JBR)" },
  { value: "JLT", label: "Jumeirah Lakes Towers (JLT)" },
  { value: "Jumeirah", label: "Jumeirah" },
  { value: "Jumeirah Village Circle", label: "Jumeirah Village Circle" },
  { value: "Jumeirah Village Triangle", label: "Jumeirah Village Triangle" },
  { value: "Mirdif", label: "Mirdif" },
  { value: "Palm Jumeirah", label: "Palm Jumeirah" },
  { value: "The Greens", label: "The Greens" },
  { value: "The Springs", label: "The Springs" },
  { value: "The Meadows", label: "The Meadows" },
  { value: "The Lakes", label: "The Lakes" },
  { value: "Umm Suqeim", label: "Umm Suqeim" },
  // Add more locations as needed
];

const getCurrentDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

const Rent: React.FC = () => {
  const [formData, setFormData] = useState({
    pickUpLocation: "",
    pickUpDate: getCurrentDate(),
    dropOffLocation: "",
    dropOffDate: "",
  });

  const [error, setError] = useState("");

  const handleSelectChange = (selectedOption: any, action: any) => {
    setFormData({ ...formData, [action.name]: selectedOption.value });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (new Date(formData.pickUpDate) > new Date(formData.dropOffDate)) {
      setError("Drop-off date cannot be before Pick-up date");
      return;
    }

    emailjs
      .send("service_8i1dajt", "template_rent", formData, "qg8f0brm5_ip7_CgY")
      .then(
        (result) => {
          console.log(result.text);
          setError("");
          alert("Email sent successfully");
          setFormData({
            pickUpLocation: "",
            pickUpDate: getCurrentDate(),
            dropOffLocation: "",
            dropOffDate: "",
          });
        },
        (error) => {
          console.log(error.text);
          setError("Failed to send email");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#FCFAFA] w-[1300px] mx-auto flex space-x-4 justify-center rounded-lg shadow-lg p-5 items-center"
    >
      <div className="space-y-2">
        <h1 className="text-lg">Pick-up Location</h1>
        <Select
          name="pickUpLocation"
          options={locations}
          required
          value={locations.find((loc) => loc.value === formData.pickUpLocation)}
          onChange={handleSelectChange}
          className="border-2 p-1 rounded-lg text-lg w-64"
          placeholder="Search a location"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-lg">Pick-up date</h1>
        <input
          name="pickUpDate"
          required
          value={formData.pickUpDate}
          onChange={handleInputChange}
          className="border-2 p-1 rounded-lg text-lg w-64"
          placeholder="Pick-up date"
          type="datetime-local"
          min={getCurrentDate()}
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-lg">Drop-off Location</h1>
        <Select
          name="dropOffLocation"
          options={locations}
          required
          value={locations.find(
            (loc) => loc.value === formData.dropOffLocation
          )}
          onChange={handleSelectChange}
          className="border-2 p-1 rounded-lg text-lg w-64"
          placeholder="Search a location"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-lg">Drop-off date</h1>
        <input
          name="dropOffDate"
          required
          value={formData.dropOffDate}
          onChange={handleInputChange}
          className="border-2 p-1 rounded-lg text-lg w-64"
          placeholder="Drop-off date"
          type="datetime-local"
          min={formData.pickUpDate}
        />
      </div>
      <div className="pt-8">
        <button type="submit" className="bg-black text-white p-2 rounded-full">
          Find a Vehicle
        </button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </form>
  );
};

export default Rent;
