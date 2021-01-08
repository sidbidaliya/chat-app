import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth, database } from '../misc/firebase';

const profileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let userRef;
    const authUnSub = auth.onAuthStateChanged(authObj => {
      if (authObj) {
        userRef = database.ref(`/profiles/${authObj.uid}`);
        userRef.on('value', snap => {
          const { name, createdAt } = snap.val();
          const data = {
            name,
            createdAt,
            uid: authObj.uid,
            email: authObj.email,
          };
          setProfile(data);
          setIsLoading(false);
        });
      } else {
        if (userRef) {
          userRef.off();
        }
        setProfile(null);
        setIsLoading(false);
      }
    });
    return () => {
      authUnSub();
      if (userRef) {
        userRef.off();
      }
    };
  }, []);

  return (
    <profileContext.Provider value={{ isLoading, profile }}>
      {children}
    </profileContext.Provider>
  );
};

export const useProfile = () => useContext(profileContext);
