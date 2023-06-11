import React, { useState } from "react";
import AWS from "aws-sdk";

const IMCandidate = () => {
  // const [recipientEmail, setRecipientEmail] = useState("");
  // const [emailSubject, setEmailSubject] = useState("");
  // const [emailBody, setEmailBody] = useState("");

  // const handleSendEmail = async (event) => {
  //   event.preventDefault();

    

  //   const ses = new AWS.SES({ apiVersion: "2010-12-01" });

  //   const emailParams = {
  //     Source: "perinparasat.20@uom.lk", // Update with your SES verified email address
  //     Destination: {
  //       ToAddresses: [recipientEmail],
  //     },
  //     Message: {
  //       Subject: {
  //         Data: emailSubject,
  //       },
  //       Body: {
  //         Text: {
  //           Data: emailBody,
  //         },
  //       },
  //     },
  //   };

  //   try {
  //     const data = await ses.sendEmail(emailParams).promise();
  //     console.log("Email sent successfully", data);
  //     // Add any success message or further actions here
  //   } catch (error) {
  //     console.error("Error sending email", error);
  //     // Add error handling or display error message here
  //   }
  // };

  // return (
  //   <form onSubmit={handleSendEmail}>
  //     <label>
  //       Recipient Email:
  //       <input
  //         type="email"
  //         value={recipientEmail}
  //         onChange={(e) => setRecipientEmail(e.target.value)}
  //         required
  //       />
  //     </label>
  //     <label>
  //       Subject:
  //       <input
  //         type="text"
  //         value={emailSubject}
  //         onChange={(e) => setEmailSubject(e.target.value)}
  //         required
  //       />
  //     </label>
  //     <label>
  //       Body:
  //       <textarea
  //         value={emailBody}
  //         onChange={(e) => setEmailBody(e.target.value)}
  //         required
  //       />
  //     </label>
  //     <button type="submit">Send Email</button>
  //   </form>
  // );
};

export default IMCandidate;
