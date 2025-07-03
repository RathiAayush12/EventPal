import React, { useState, useEffect } from "react";
import EventCard from "../components/EventCard";
import "../style/Bookmarks.css";

const Bookmark = () => {
  const [bookmarkedEvents, setBookmarkedEvents] = useState([]);

  useEffect(() => {
    const loadBookmarks = () => {
      const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
      setBookmarkedEvents(bookmarks);
    };

    loadBookmarks();

    const handleStorageChange = () => {
      loadBookmarks();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("bookmarkUpdated", loadBookmarks);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("bookmarkUpdated", loadBookmarks);
    };
  }, []);

  const isEmpty = bookmarkedEvents.length === 0;
  return (
    <div className="bookmark-container">
      <div className="bookmark-header">
        <h1>My Bookmarks</h1>
      </div>

      {isEmpty ? (
        <div className="empty-bookmarks">
          <h2>No Bookmarks yet</h2>
          <p>Events you bookmark will appear here</p>
        </div>
      ) : (
        <div className="bookmards-grid">
          {bookmarkedEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Bookmark;
