import { createContext, useState, useContext, useEffect } from "react";

const defaultEvents = {
  events: [],
  setEvents: () => {},
  isLoading: true,
  setIsLoading: () => {},
  isError: false,
  setIsError: () => {},
};

const defaultStep = 0;

const EventsContext = createContext({ defaultEvents, defaultStep });

// eslint-disable-next-line react/prop-types
const EventsProvider = ({ children }) => {
  const [events, setEvents] = useState(defaultEvents);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch("api/events");
        const events = await response.json();
        setEvents(events);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    })();
    setTimeout(() => setIsLoading(false), 1500);
  }, []);

  return (
    <EventsContext.Provider
      value={{
        events,
        setEvents,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
};

const useEvents = () => useContext(EventsContext); // Specify the context here

// eslint-disable-next-line react-refresh/only-export-components
export { EventsProvider, useEvents };
