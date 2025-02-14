/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  });

  const [name, setInviteeName] = useState({
    firstName: "",
    lastName: "",
  });

  const [isFormValid, setIsFormValid] = useState(false); // Track form validity

  // Handle click to toggle the envelope opening
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Check if both firstName and lastName have content to enable button
    setIsFormValid(name.firstName.trim() !== "" && name.lastName.trim() !== "");
  }, [name]);

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.target);
    getInviteeName(formData); // Update the state with the form data
  };

  const getInviteeName = (formData) => {
    const inviteeName = formData.get("inviteeFirstName");
    const inviteeLastName = formData.get("inviteeLastName");

    setInviteeName({
      firstName: inviteeName,
      lastName: inviteeLastName,
    });
  };

  return (
    <div className="App">
      <div className="envelope-container">
        <div className={`envelope ${isOpen ? "open" : ""}`}>
          <div
            className="envelope-front"
            style={
              isOpen ? { display: "none", backgroundColor: "white" } : style
            }
          >
            <h3>
              <p>
                CHIDERA RUTH UKAEGBU <br />
                &amp; <br />
                DABERECHI LEVI NWACHUKWU
              </p>
            </h3>
            <h2>Invites:</h2>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="firstName">
                <input
                  type="text"
                  name="inviteeFirstName"
                  id="firstName"
                  placeholder="First Name"
                  aria-label="Invitee first name"
                  value={name.firstName} // Controlled input
                  onChange={(e) =>
                    setInviteeName({ ...name, firstName: e.target.value })
                  }
                  required
                />
              </label>
              <label htmlFor="lastName">
                <input
                  type="text"
                  name="inviteeLastName"
                  id="lastName"
                  placeholder="Last Name"
                  aria-label="Invitee last name"
                  value={name.lastName} // Controlled input
                  onChange={(e) =>
                    setInviteeName({ ...name, lastName: e.target.value })
                  }
                  required
                />
              </label>
              {/* Submit button with disabled logic */}
              <button
                type="submit"
                onClick={handleClick}
                disabled={!isFormValid}
              >
                Click to Open Invitation
              </button>
            </form>
          </div>
          <div className="envelope-back">
            {isOpen && (
              <div className="invitation">
                <h1>Traditional Marriage Invitation</h1>
                <div className="address">
                  <p>Together with the families</p>
                  <p>
                    <strong>Chidera Ruth Ukaegbu</strong>
                  </p>
                  <p> &amp;</p>
                  <p>
                    <strong>Daberechi Levi Nwachukwu</strong>
                  </p>
                  <h2>Cordially Invites:</h2>
                  <p>
                    <strong>
                      {name.firstName} {name.lastName}
                    </strong>
                  </p>
                  <br /> To their Traditional Marriage
                  <h4>Save the Date!</h4>
                  <p>
                    <strong>Saturday, March 15, 2025</strong>
                  </p>
                  <p>
                    <h3>@</h3>
                    Eric Onwuzuruike Ukaegbu (Bishop) compound, Umuoma Umuorie
                    Naze Owerri North LGA, Imo State
                  </p>
                  <p>
                    <strong>RSVP:</strong>
                  </p>
                  <p>08152445691</p>
                  <p>09160063329</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
