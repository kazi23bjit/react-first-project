import Sidebar from "../components/Sidenav";
import { useState } from "react";
import Calendar from "../components/Calender";
import Modal from "react-modal";

function SchedulePage() {
  const customModalStyles = {
    content: {
      backgroundColor: "Neon",
      width: "300px", // Adjust the width as needed
      height: "200px", // Adjust the height as needed
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [events, setEvents] = useState([]);
  const [clickedEvent, setClickedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formValues, setFormValues] = useState({});

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleEventClick = (event) => {
    setClickedEvent(event.event);
    setIsModalOpen(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic
    const { eventName, eventDateTime } = formValues;
    const start = new Date(eventDateTime);

    // Create a new event object
    const newEvent = {
      id: Date.now().toString(), // Unique identifier for the event
      title: eventName,
      start
    };

    // Update the events state by adding the new event
    setEvents((prevEvents) => [...prevEvents, newEvent]);

    // Close the modal after submitting the form
    closeModal();
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setClickedEvent(null);
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
  };
  //   const createEvent = () => {
  //     const customEvent = {
  //       id: "custom-event-1",
  //       title: "Custom Event",
  //       start: new Date("2023-07-22 06:00:00 PM"),
  //       end: new Date("2023-07-22 06:40:00 PM"),
  //     };

  //     setEvents((prevEvents) => [...prevEvents, customEvent]);
  //   };

  // const handleCreateAssignment = (assignment) => {
  //   // Create the assignment logic
  //   // Update the state with the new assignment
  //   setEvents((prevEvents) => [...prevEvents, assignment]);
  // };

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };
  return (
    <>
      <div className="app-container">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`content-container ${isSidebarOpen ? "sidebar-open" : ""}`}
        >
          <h1>Schedule App</h1>
          {!isModalOpen && !clickedEvent && (
            <div className="calendar-container">
              <Calendar
                events={events}
                handleEventClick={handleEventClick}
                isSidebarOpen={isSidebarOpen}
              />
            </div>
          )}
          {/* <button onClick={}
                style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop:"10px"
                  }}
            >Create Custom Event</button> */}
          <button onClick={openModal}>Create Custom Event</button>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                backgroundColor: "white",
                width: "400px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
            }}
          >
            <h2>Create Event</h2>
            <form onSubmit={handleSubmit} className="form-container">
              <label className="form-label">
                Event Name:
                <input
                  type="text"
                  name="eventName"
                  className="form-input"
                  value={formValues.eventName || ""}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Event Date:
                <input
                  type="datetime-local"
                  name="eventDateTime"
                  value={formValues.eventDateTime || ""}
                  onChange={handleChange}
                />
              </label>
              <button
                type="submit"
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginTop: "10px",
                }}
              >
                Submit
              </button>
            </form>
            <button onClick={closeModal}>Close</button>
          </Modal>
          {isModalOpen && clickedEvent && (
            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              style={customModalStyles}
            >
              {clickedEvent && (
                <div>
                  <h2>{clickedEvent.title}</h2>
                  <p>
                    Start:{" "}
                    {clickedEvent.start && clickedEvent.start.toLocaleString()}
                  </p>
                  <p>
                    End: {clickedEvent.end && clickedEvent.end.toLocaleString()}
                  </p>
                  <button
                    style={{
                      backgroundColor: "blue",
                      color: "white",
                      padding: "10px 20px",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      marginTop: "10px",
                    }}
                  >
                    update Event
                  </button>

                  {/* Add any other event details to display in the modal */}
                </div>
              )}
            </Modal>
          )}
        </div>
        {/* <Calendar events={events} handleEventClick={handleEventClick} /> */}

        {/* <AssignmentModal
            isOpen={isModalOpen}
            onClose={closeModal}
            onCreateAssignment={handleCreateAssignment}
          /> */}
      </div>
    </>
  );
}

export default SchedulePage;
