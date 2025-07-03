import React, { useState, useEffect } from "react";
import '../style/EventCard.css'

const EventCard = ({ event }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

   useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const found = bookmarks.some((b) => b.id === event.id);
    setIsBookmarked(found);
  }, [event.id]);

  const handleBookmarked = () => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");

    if (isBookmarked) {
      const updated = bookmarks.filter((b) => b.id !== event.id);
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(false);
    } else {
      const updated = [...bookmarks, event];
      localStorage.setItem("bookmarks", JSON.stringify(updated));
      setIsBookmarked(true);
    }
  };

  return (
    <div className="card-box">
      <span className="event-category">{event.category}</span>
      <div onClick={handleBookmarked} className="bookmarkbtn">
        {isBookmarked ? "❤️" : "🤍"}
      </div>
      <h2 className="event-title">{event.title}</h2>
      <p className="event-desciption">{event.description}</p>
      <div className="event-info">
        <span>
          📅 {event.date} 🕒 {event.time}
        </span>
        <span>📍 {event.location}</span>
        <span>🖥️{event.type}</span>
      </div>

      <div className="card-bottom">
        <span className="event-price">Rs.{event.price}</span>
        <button className="detailsbtn">View Details</button>
      </div>
    </div>
  );
};
export default EventCard;
