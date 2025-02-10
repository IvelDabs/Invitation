import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  let [style, setStyle] = useState({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    textAlign: "center",
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <div className="envelope-container">
        <div
          className={`envelope ${isOpen ? "open" : ""})
          }`}
        >
          <div
            className="envelope-front"
            style={
              isOpen ? { display: "none", backgroundColor: "white" } : style
            }
          >
            <h3>
              {/* Traditional Wedding Invitation */}
              <p>
                CHIDERA RUTH UKAEGBU <br />
                &amp; <br />
                DABERECHI LEVI NWACHUKWU
              </p>{" "}
            </h3>
            <h2>Invites You</h2>
            <button onClick={handleClick}>Click to Open Invitation</button>
          </div>
          <div className="envelope-back">
            {isOpen && (
              <div className="invitation">
                <h1>Traditional Marriage Invitation</h1>
                <div className="address">
                  <p>Together with the families of</p>
                  <p>
                    <strong>Chidera Ruth Ukaegbu</strong>
                  </p>
                  <p> &amp;</p>

                  <p>
                    <strong>Daberechi Levi Nwachukwu</strong>
                  </p>
                  <h2>Cordially invites you to their Traditional Marriage</h2>
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
