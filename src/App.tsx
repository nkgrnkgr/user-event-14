import { useState } from "react";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <div>
      <button onClick={handleClick}>button</button>
      {open && <div role="dialog">dialog</div>}
    </div>
  );
}

export default App;
