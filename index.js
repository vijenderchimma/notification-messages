const Notification = (props) => {
  //  Write your code here.
  const { message, className } = props;
  return <p className={`p ${className}`}>{message}</p>;
};

const element = (
  //  Write your code here.
  <div class="main-container">
    <h1 className="main-heading">Notifications</h1>
    <div className="text-primary-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification message="Information Message" className="text" />
    </div>
    <div className="text-success-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification message="Success Message" className="text" />
    </div>
    <div className="text-warning-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification message="Warning Message" className="text" />
    </div>
    <div className="text-error-container">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
      <Notification message="Error Message" className="text" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
