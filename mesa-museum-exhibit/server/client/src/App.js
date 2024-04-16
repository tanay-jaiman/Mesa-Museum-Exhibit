import React, {useEffect, useState} from "react";

function App() {

  const [backend_data, set_backend_data] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        set_backend_data(data);
      }
    )
  }, [])

  return (
    <div>
      <h1 class="header">MESA MUSEUM EXHIBIT</h1>
    </div>
  );
}

export default App;