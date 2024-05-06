import { createContext, useState, useContext } from "react";

const defaultUserData = {
  email: "",
  password: "",
  birth_date: "",
  gender: "",
  name: "",
  surname: "",
  role: "User",
  location: "string",
};

const defaultStep = 0;

const RegistrationContext = createContext({ defaultUserData, defaultStep });

// eslint-disable-next-line react/prop-types
const RegistrationProvider = ({ children }) => {
  const [userData, setUserData] = useState(defaultUserData);
  const [step, setStep] = useState(defaultStep);

  const updateData = (data, type) => {
    setUserData((prev) => ({ ...prev, [type]: data }));
  };

  const updateStep = () => {
    setStep(step + 1);
  };

  const updateStepBack = () => {
    setStep(step - 1);
  };

  return (
    <RegistrationContext.Provider
      value={{ userData, updateData, updateStep, step, updateStepBack }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

const useRegistration = () => useContext(RegistrationContext); // Specify the context here

// eslint-disable-next-line react-refresh/only-export-components
export { RegistrationProvider, useRegistration };
