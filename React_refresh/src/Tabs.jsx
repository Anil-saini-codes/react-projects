import { useState } from "react";

function Tabs() {
  // Tabs Data
  const items = [
    {
      id: 1,
      label: "Home",
      content: "Welcome to the Home tab!",
    },

    {
      id: 2,
      label: "Profile",
      content: "This is your Profile tab.",
    },

    {
      id: 3,
      label: "Settings",
      content: "Adjust your Settings here.",
    },
  ];

  // Active Tab State
  const [activeTab, setActiveTab] = useState(items[0].id);

  return (
    <div style={styles.container}>
      <h2>Tabs Component</h2>

      {/* Buttons */}
      <div style={styles.buttonWrapper}>
        {items.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...styles.button,

              backgroundColor: activeTab === tab.id ? "#000" : "#ddd",

              color: activeTab === tab.id ? "#fff" : "#000",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={styles.content}>
        {items.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}

// Styles
const styles = {
  container: {
    width: "500px",
    margin: "50px auto",
    fontFamily: "Arial",
  },

  buttonWrapper: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },

  content: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",
  },
};

export default Tabs;
