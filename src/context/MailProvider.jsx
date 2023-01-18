import { createContext, useEffect, useState } from "react";
import React from "react";
export const MailContext = createContext();

const MailProvider = ({ children }) => {
  const [inbox, setInbox] = useState([]);
  const [spam, setSpam] = useState([]);
  const [deleted, setDeleted] = useState([]);
  const [custom, setCustom] = useState([]);

  //   Load Inbox Data
  useEffect(() => {
    fetch("inbox.json")
      .then((res) => res.json())
      .then((data) => {
        setInbox(data);
      });
  }, []);

  //   Load Spam Data
  useEffect(() => {
    fetch("spam.json")
      .then((res) => res.json())
      .then((data) => setInbox(data));
  }, []);

  const values = {
    inbox,
    setInbox,
    spam,
    setSpam,
    deleted,
    setDeleted,
    custom,
    setCustom,
  };
  return <MailContext.Provider value={values}>{children}</MailContext.Provider>;
};

export default MailProvider;
