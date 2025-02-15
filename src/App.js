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
    e.preventDefault();
    const formData = new FormData(e.target);
    getInviteeName(formData);
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
                  // value={name.firstName}
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
                  value={name.lastName}
                  onChange={(e) =>
                    setInviteeName({ ...name, lastName: e.target.value })
                  }
                  required
                />
              </label>
              <button
                type="submit"
                onClick={handleClick}
                aria-label={
                  !isFormValid
                    ? "Fill in your name to open invite"
                    : "Click to open invite"
                }
                disabled={!isFormValid}
              >
                {!isFormValid
                  ? "Fill in your name to open invite"
                  : "Click to open invite"}
              </button>
            </form>
          </div>
          <div className="envelope-back">
            {isOpen && (
              <div className="invitation">
                {/* <h1>Traditional Marriage Invitation</h1> */}
                <div className="address">
                  <p>
                    The families of Mr & Mrs Eric Onwuzuruike Ukaegbu of Umuoma
                    Umuorie Naze Owerri North L.G.A, Imo State.
                    <br />
                    <p> &amp;</p> <br /> Mr & Mrs Enyioma Nwachukwu Esiaga of
                    Ehume Umuokpara, Umuahia South L.G.A, Abia State.
                  </p>
                  <h2>Cordially Invites:</h2>
                  <p>
                    <strong>
                      {name.firstName} {name.lastName}
                    </strong>
                  </p>{" "}
                  <br /> To the Traditional Marriage of their children
                  <p>
                    <strong>Chidera Ruth Ukaegbu</strong>
                  </p>
                  <p> &amp;</p>
                  <p>
                    <strong>Daberechi Levi Nwachukwu</strong>
                  </p>
                  {/* <h2>Cordially Invites:</h2>
                  <p>
                    <strong>
                      {name.firstName} {name.lastName}
                    </strong>
                  </p> */}
                  {/* <br /> To their Traditional Marriage */}
                  <h4>Save the Date!</h4>
                  <p>
                    <strong>Saturday March 15, 2025</strong>
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
