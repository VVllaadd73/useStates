// src/components/App.tsx

import Alert from "./Alert";
import Button from "./Button";
import UserMenu from "./UserMenu";
import ClickCounter from "./ClickCounter";
import { useState } from "react";
import "./App.css";

interface Values {
   x: number;
   y: number;
};

export default function App() {

   const handleClick_1 = (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log("Clicked!", event);
      console.log("Target:", event.target);
   };

   const [values, setValues] = useState<Values>({ x: 0, y: 0 });
   const [clicks, setClicks] = useState<number>(0);
   const [text, setText] = useState<string>("hello");
   const [clicksz, setClicksz] = useState<number>(0);
   const [isOpen, setIsOpen] = useState(false);

   const toggleMessage = () => {
      setIsOpen(!isOpen);
   };
   const handleClick_2 = () => { setText(text + "!") };
   const handleClick = () => { setClicks(clicks + 1) };
   const handleClickz = () => { setClicksz(clicksz + 1) };

   const updateX = () => { setValues({ ...values, x: values.x + 1 }) };
   const updateY = () => { setValues({ ...values, y: values.y + 1 }) };

   return (
      <>

         <Alert />
         <Alert type="success" />
         <Alert type="error" />

         <Button variant="primary" text="Login" />
         <Button variant="secondary" text="Follow" />

         <UserMenu name="John Doe" />

         <div className="cont">
            <button onClick={handleClick_1}>First button</button>
            <button onClick={(event) => console.log(event)}>Second button</button>
         </div>

         <div className="cont">
            <button onClick={handleClick}>Current: {clicks}</button>
            <button onClick={handleClick_2}>Text: {text}</button>
         </div >

         <div className="cont">
            <ClickCounter value={clicksz} onUpdate={handleClickz} />
            <ClickCounter value={clicksz} onUpdate={handleClickz} />
         </div >

         <button onClick={toggleMessage}>
            {isOpen ? "Hide message" : "Show message"}
         </button>
         {isOpen && <p>🎉 Surprise! You toggled me.</p>}

         <div>
            <p>x: {values.x}, y: {values.y}</p>
            <button onClick={updateX}>Update x</button>
            <button onClick={updateY}>Update y</button>
         </div>
      </>
   );
}