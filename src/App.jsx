import "./App.css";
import Button from "./components/Button.jsx";
import Alert from "./components/Alert.jsx";

function App() {
  return (
    <div className="App"
      style={{
        display: "flex", 
        gap: "100px",
      }}>
      <div className="button-components-section" 
        style={{
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          gap: "20px", 
        }}>
        <Button
          primary="Primary"
          second="Secondary"
          error="Error"
          success="Success"
        />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert type="error" message="This is an error alert box" />
        <Alert type="warning" message="This is a warning alert box" />
        <Alert type="info" message="This is an info alert box" />
        <Alert type="success" message="This is a success alert box" />
      </div>
    </div>
  );
}

export default App;
