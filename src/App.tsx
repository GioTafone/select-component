import { useState } from "react";
import { options } from "./options";
import Select from "./components/Select";

function App() {
  const [value, setValue] = useState<typeof options[0] | undefined>(options[0]);
  return (
    <>
      <h1>Hello</h1>
      <Select
        options={options}
        value={value}
        onChange={(option) => setValue(option)}
      />
    </>
  );
}

export default App;
