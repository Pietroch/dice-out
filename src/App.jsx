import React, { useState } from "react";
import { Container, SegmentedControl } from "@mantine/core";

import AuthenticationForm from "./auth/auth";
import IndividualDetails from "./individual/individual";
import Sosa from "./sosa/sosa";

const App = () => {
  const [activeModule, setActiveModule] = useState("Auth");

  const handleModuleChange = (value) => {
    setActiveModule(value);
  };

  return (
    <>
      <Container>
        <h1>Bienvenue sur mon application !</h1>
        <SegmentedControl
          data={[
            "Auth",
            "Individual",
            "Sosa",
          ]}
          value={activeModule}
          onChange={handleModuleChange}
        />
        {activeModule === "Auth" && <AuthenticationForm />}
        {activeModule === "Individual" && <IndividualDetails />}
        {activeModule === "Sosa" && <Sosa />}
      </Container>
    </>
  );
};

export default App;