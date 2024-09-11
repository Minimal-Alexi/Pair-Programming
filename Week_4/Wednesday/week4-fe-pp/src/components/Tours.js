import { tours } from "../data";
import Tour from "./Tour.js";
import { useState } from "react";

const Tours = () => {
  const [toursData, setToursData] = useState(tours);

  const handleDeleteItem = (tourID) => {
    // Filter out the item with the specified ID and update the state
    const updatedTours = toursData.filter((tour) => tour.id !== tourID);
    setToursData((toursData) => updatedTours);
  };

  return (
    <section className="section" id="tour">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>
      <div className="section-center featured-center">
        {toursData.map((toursData) => {
          return (
            <Tour
              item={toursData}
              key={toursData.id}
              onDelete={handleDeleteItem}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
