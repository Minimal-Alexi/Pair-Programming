import React from "react";

const Tour = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item.id); // Pass the item's ID to the parent component for deletion
  };

  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={item.image} className="tour-img" alt={item.title} />
        <p className="tour-date">{item.date}</p>
      </div>
      <div className="tour-info">
        <div className="tour-title">
          <h4>{item.title}</h4>
        </div>
        <p>{item.info}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className="fas fa-map" />
            </span>
            {item.location}
          </p>
          <p>from {item.cost}</p>
          <p>{item.duration} days</p>
        </div>
      </div>
      <button onClick={handleDelete} className="btn">
        Delete
      </button>
    </article>
  );
};
export default Tour;
