import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import "./index.css";
import Footer from "./Footer";
import Notification from "./Notification";

export default function Page(props) {
  const [isClicked, setIsClicked] = React.useState(false);
  function showHide(e) {
    setIsClicked(true);
  }

  return (
    <div className="main">
      <Header onClick={showHide} />
      {isClicked && <Notification />}
      <h1> Sample body </h1>
      <Footer />
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
