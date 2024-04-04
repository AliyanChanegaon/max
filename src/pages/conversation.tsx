import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserDataProps, useFirebase } from "../context/firebase-context";
import UserMessage from "../components/messages/user-message";
import { useFontSize } from "../context/font-size-context";

const Conversation = () => {
  const { setId, userData } = useFirebase();
  const { fontSize } = useFontSize();

  const { id } = useParams<{ id: string }>();

  const { conversation }: UserDataProps = userData || {};
  const updatedFont = `${fontSize}px`;

  const headings = {
    personal_information: "Personal Information",
    screening_questions: "Screening Questions"
  };

  const findTitleWithkey = (key: string) => {
    const [category, key_name] = key.split(".");
    return userData?.[category]?.[key_name] ?? "";
  };

  const confirmationStatus = {
    0: "/assets/confirmed-status.svg",
    1: "/assets/declined-status.svg",
    3: "/assets/default-status.svg"
  };

  useEffect(() => {
    if (id) {
      setId(id);
    }
  }, [id]);

  return (
    <Box
      // border={1}
      sx={{
        display: "grid"
      }}
    >
      <Box
        // border={1}
        className="chat-container"
        sx={{
          alignSelf: "end",
          justifySelf: "center",
          width: "100%",
          maxWidth: { xs: "400px", sm: "80%" },
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center"
        }}
      >
        {conversation?.map((item, idx) => {
          return (
            <>
              {item?.type === "heading" && (
                <Box
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    padding: "5px 0px",
                    bgcolor: "#F5F5F5",
                    marginBottom: "-5px"
                  }}
                  key={`${item?.type}-${idx}`}
                >
                  <Typography
                    sx={{
                      fontFamily: "InterDisplay",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#003F66"
                    }}
                  >
                    {headings[item?.title as unknown as keyof typeof headings]}
                  </Typography>
                </Box>
              )}

              {item?.type === "chat" && (
                <>
                  {item.question && (
                    <Box
                      sx={{
                        alignSelf: "flex-start",
                        backgroundColor: "#F0F9FF",
                        border: "1px solid #C8EAFF",
                        width: "fit-content",
                        padding: "10px 12px",
                        color: "#003F66",
                        borderRadius: "8px",
                        margin: "0px 15px"
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "InterDisplay",
                          fontSize: updatedFont,
                          fontWeight: "400",
                          color: "#003F66",
                          wordSpacing: "-0.99px"
                        }}
                      >
                        {item.question}
                      </Typography>
                    </Box>
                  )}

                  {item.answer_key && <UserMessage title={findTitleWithkey(item.answer_key)} fontSize={updatedFont} />}
                </>
              )}

              {item.type === "confirmation" && item?.answer_key && (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    marginTop: "10x"
                  }}
                >
                  <img
                    src={confirmationStatus[findTitleWithkey(item.answer_key!) as keyof typeof confirmationStatus] ?? ""}
                    alt="confim-status"
                    width={20}
                  />
                  <Typography
                    sx={{
                      fontFamily: "InterDisplay",
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#6B7280",
                      width: "70%",
                      textAlign: "center"
                    }}
                  >
                    Please confirm all the details shared so far before moving forward
                  </Typography>
                </Box>
              )}
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default Conversation;
