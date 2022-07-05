const Notification = (props) => {
  const { className, message, url } = props;
  return (
    <div className={className}>
      <img src={url} className="img1" />
      <p className="textColor">{message}</p>
    </div>
  );
};

const element = (
  <div class="bg-color">
    <h1 class="heading">Notifications</h1>
    <div class="container">
      <Notification
        className="button1"
        message="information message"
        url="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        className="button2"
        message="Success message"
        url="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        className="button3"
        message="Warming message"
        url="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        className="button4"
        message="Error message"
        url="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
