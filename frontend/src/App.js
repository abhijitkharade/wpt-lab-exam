import { useState } from "react";
// import { ListGroup } from "react-bootstrap";

export default function App() {
  const [message, setmessage] = useState("");
  const [messageList, setmessageList] = useState([]);
  const processmessage = (e) => {
    setmessage(e.target.value);
  };
  const hanlsend = () => {
    const newList = [...messageList, message];
    setmessageList(newList);
    setmessage("");
  };

  return (
    <>
      <MyComponent />
    </>
  );
}

function MyComponent() {
  // // const background = "bg-info";
  // const [message, setMessage] = useState("Lets Chat here...");
  // const [list, setList] = useState([]);

  // const msgHere = () => {
  //   const newList = [message, ...list];
  // };

  // const changeMessage = (e) => {
  //   const newMessage = e.target.value;
  //   setMessage(newMessage);
  // };
  return (
    <div>
      <header className="bg-dark text light p-3">
        MyChatApp by Abhijit Kharade 21094032002
      </header>

      {/* **********input */}
      <div>
        <input
          className="form-control mt-2"
          type="text"
          // value={message}
          // onChange={changeMessage}
        />

        <input
          className="btn btn-primary w-100 mt-2"
          type="button"
          value="send"
          // onClick={msgHere}
        />
      </div>

      {messageList.map((item, index) => (
        <div className="bg-secondary mt-1" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
}
