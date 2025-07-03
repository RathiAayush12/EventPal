import React, { useState } from "react";
import "../style/CreateEvent.css";
const CreateEvent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !date ||
      !description ||
      !location ||
      !type ||
      !category ||
      !time
    ) {
      alert("Please fill in all fields");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title,
      date,
      description,
      location,
      time,
      type,
      category,
      price: parseFloat(price),
    };

    const existingEvents = JSON.parse(localStorage.getItem("events") || "[]");
    const updatedEvents = [...existingEvents, newEvent];

    localStorage.setItem("events", JSON.stringify(updatedEvents));

    setTitle("");
    setDate("");
    setDescription("");
    setLocation("");
    setCategory("");
    setTime("");
    setType("");
    setPrice("");

    alert("Event Created succesfully");
  };
  return (
    <div className="create-event-container">
      <h1>Create New Event</h1>
      <form className="create-event-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="">Select Type</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="workshop">Workshop</option>
          <option value="webinar">Webinar</option>
          <option value="meetup">Meetup</option>
        </select>

        <input
          type="number"
          placeholder="Price(Rs.)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEvent;
