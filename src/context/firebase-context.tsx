/* eslint-disable no-irregular-whitespace */
import React, { createContext, useState, useContext, useEffect, ReactNode } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const FirebaseContext = createContext<any>({
  userData: null,
  setId: null
});

export interface UserDataProps {
  id?: string;
  caller_id?: string;
  call_connection?: number;
  verification_code?: string;
  current_page?: string;

  personal_information?: {
    first_name?: string;
    last_name?: string;
    birth_date?: string;
    age?: string;
    gender?: string;
    home_address?: string;
    zip_code?: string;
    city?: string;
    state?: string;
    phone_number?: string;
    confirmation?: 0 | 1 | 3;
  };
  screening_questions?: {
    feeling_sick?: string;
    allergic_to_medication?: string;
    serious_reaction_or_fainted_after_vaccination?: string;
    currently_pregnant_or_planning_pregnancy?: string;
    received_vaccine?: string;
    confirmation?: 0 | 1 | 3;
  };

  conversation?: Array<{
    type: "heading" | "chat" | "confirmation";
    date: string;
    title?: string;
    question?: string;
    answer_key?: string;
  }>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useFirebase = () => {
  return useContext(FirebaseContext);
};

const OLD_URL = "https://cca-voice-test-default-rtdb.firebaseio.com";

const firebaseConfig = {
  apiKey: "AIzaSyAtDX0jn377jOPIlCAEY9yrY4XJXC5Uwdk",
  authDomain: "cca-voice-test.firebaseapp.com",
  databaseURL: OLD_URL,
  projectId: "cca-voice-test",
  storageBucket: "cca-voice-test.appspot.com",
  messagingSenderId: "808017106241",
  appId: "1:808017106241:web:95e6bc2f50a95043527dc0"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

export const FirebaseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserDataProps | null>(null);
  const [, setIdToken] = useState<string | undefined>("");
  const [id, setId] = useState<string | null>(null);

  const dataRef = ref(database, `Max/${id}/data`); // for old URL
  // const cartRef = ref(database, `CCA/${id}/Data`); // for NEW URL
  console.log(id, "ids");

  // const sendPatchRequest = async (url: string, jsonData: any) => {
  //   const response = await fetch(url, {
  //     method: "PATCH",
  //     body: JSON.stringify(jsonData)
  //   });

  //   if (!response.ok) {
  //     return response.json();
  //   } else {
  //     return response.status;
  //   }
  // };

  useEffect(() => {
    if (id) {
      const signInUser = async () => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, "max@cca.com", "max@public");
          const user = userCredential.user;
          const accessToken = await user.getIdToken();
          setIdToken(accessToken);

          onValue(dataRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data, "data");

            // sendPatchRequest(`${OLD_URL}/Max/77777777/data.json?auth=${accessToken}`, {...firebaseData}).then((res) =>
            //   console.log(res)
            // );

            if (data) {
              setUserData(data);
            } else {
              console.log("Data not found");
            }
          });
        } catch (error) {
          console.log(error, "error");
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // console.error(`Error: ${errorCode} - ${errorMessage}`);
        }
      };

      signInUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, id]);

  return <FirebaseContext.Provider value={{ userData, setId }}>{children}</FirebaseContext.Provider>;
};

// const firebaseData: UserDataProps = {
//   id: "",
//   caller_id: "+91 9828927272",
//   call_connection: 1,

//   verification_code: "",

//   current_page: "",

//   personal_information: {
//     first_name: "",
//     last_name: "",
//     birth_date: "",
//     age: "",
//     gender: "",
//     home_address: "",
//     zip_code: "",
//     city: "",
//     state: "",
//     phone_number: "",
//     confirmation: 3
//   },

//   screening_questions: {
//     feeling_sick: "",
//     allergic_to_medication: "",
//     serious_reaction_or_fainted_after_vaccination: "",
//     currently_pregnant_or_planning_pregnancy: "",
//     received_vaccine: "",
//     confirmation: 3
//   },

//   conversation: [
//     {
//       type: "heading",
//       title: "personal_information",
//       date: "2021-09-01T12:00:00Z"
//     },

//     {
//       type: "chat",
//       question: "What is your first name?",
//       answer_key: "personal_information.first_name",
//       date: "2021-09-01T12:00:00Z"
//     },

//     {
//       type: "chat",
//       question: "What is your last name?",
//       answer_key: "personal_information.last_name",
//       date: "2021-09-01T12:00:00Z"
//     },

//     {
//       type: "confirmation",
//       answer_key: "personal_information.confirmation",
//       date: "2021-09-01T12:00:00Z"
//     },

//     {
//       type: "heading",
//       title: "screening_questions",
//       date: "2021-09-01T12:00:00Z"
//     },

//     {
//       type: "chat",
//       question: "Are you sick today?",
//       answer_key: "screening_questions.feeling_sick",
//       date: "2021-09-01T12:00:00Z"
//     },
//     {
//       type: "confirmation",
//       answer_key: "screening_questions.confirmation",
//       date: "2021-09-01T12:00:00Z"
//     }
//   ]
// };
