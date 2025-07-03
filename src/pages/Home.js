import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import eventsData from "../data/events";
import "../style/Home.css";

const Home = () => {
  const [events, setEvents] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  useEffect(() => {
    const savedEvents=JSON.parse(localStorage.getItem("events") || "[]");
    setEvents([...eventsData,...savedEvents]);
  }, []);

  const filteredEvents = events.filter((event) => {
    const searchMatch =
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());

    const categoryMatch =
      categoryFilter === "All" || event.category === categoryFilter;
    const typeMatch = typeFilter === "All" || event.type === typeFilter;

    return searchMatch && categoryMatch && typeMatch;
  });

  const user = JSON.parse(localStorage.getItem("user"));
  const username = user?.username || "user";
  return (
    <div className="home-container">
      <h1 className="heading">Discover Amazing Events</h1>
      <p className="join">Join Workshops,webinars,meetups</p>
      <h2 className="welcome">Welcome back {username}</h2>

      <div className="search-filters">
        <input
          type="text"
          placeholder="Search Events.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="workshop">Workshop</option>
          <option value="webinar">Webinar</option>
          <option value="meetup">Meetup</option>
          <option value="meetup">Meetup</option>
          <option value="seminar">Seminar</option>
          <option value="course">Course</option>
          <option value="conference">Conference</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </select>
      </div>

      {filteredEvents.length === 0 ? (
        <p className="no-events">No events found</p>
      ):(
        <div className="event-grid">
          {filteredEvents.map((event)=>(
            <EventCard event={event} key={event.id}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
