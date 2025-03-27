import React, { useState } from "react";

import BookingSteps from "./BookingSteps"; // Import the stepper
import "./RoomList.css";
import Tabs from "./Tabs"; 

const RoomList = ({ rooms }) => {
    const [activeTab, setActiveTab] = useState("room-rates");
    

  return (
    <>
      {/* Stepper Section */}
      <BookingSteps />
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Room List Section */}
      <div className="room-list">
        <h2 className="search-title">Rooms for your search</h2>
        {/* <label className="taxes-checkbox">
          <input type="checkbox" />
          Show with taxes and fees
        </label> */}

        {rooms.map((room, index) => (
          <div key={index} className="room-card">
            {/* Left Section: Image & Details */}
            <div className="room-left">
              <div className="room-image-container">
                <img src={room.images[0]} alt="Room" className="room-image" />
              </div>
              <div className="room-details">
                <p>{room.size} • {room.capacity} • {room.bedType}</p>
                <a href="#" className="room-details-link">ROOM DETAILS</a>
              </div>
            </div>

            {/* Right Section: Room Info & Pricing */}
            <div className="room-right">
              <h3 className="room-title">{room.name}</h3>

              {room.warning && <p className="room-warning">⚠ {room.warning}</p>}

              {room.pricing.map((option, idx) => (
                <div key={idx} className="pricing-box">
                  <h4 className="pricing-title">{option.type}</h4>
                  <ul className="pricing-details">
                    {option.details.map((detail, i) => (
                      <li key={i}>♦ {detail}</li>
                    ))}
                  </ul>

                  {/* Pricing & Buttons */}
                  <div className="price-options">
                    <div className="member-price">
                      <p>MEMBER RATE</p>
                      <h2>₹ {option.memberPrice}</h2>
                      
                    </div>
                    <div className="standard-price">
                      <p>STANDARD RATE</p>
                      <h2>₹ {option.standardPrice}</h2>
                      <button className="select-btn">SELECT</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomList;
