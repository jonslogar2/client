import axios from "axios";
import { useState } from "react";

import style from "./SmsPage.module.css";

const SMSPage = () => {
  const [customerName, setCustomerName] = useState("");
  const [customerPhoneNumber, setCustomerPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const testName = import.meta.env.VITE_TESTING_NAME;

  const handleSendSMS = (e) => {
    e.preventDefault();
    console.log(`Clicked`);

    if (
      customerName.trim() === "" ||
      customerPhoneNumber.trim() === "" ||
      message.trim() === ""
    ) {
      console.log(`Please fill up all input.`);
    } else if (!customerPhoneNumber.startsWith(63)) {
      console.log(`Customer phone number must starts with 63`);
    } else if (customerPhoneNumber.length < 12) {
      console.log(
        `Customer phone number must starts with 63 and length of 12 characters`
      );
    } else if (message.length <= 20) {
      console.log(`Message too short`);
    } else {
      const apiUrl = `http://smsapi.acestartelecoms.net/api/SendSMS?api_id=${
        import.meta.env.VITE_API_ID
      }&api_password=${
        import.meta.env.VITE_API_PASSWORD
      }&sms_type=P&encoding=T&sender_id=${
        import.meta.env.VITE_SENDER_ID
      }&phonenumber=${customerPhoneNumber}&textmessage=${message}`;

      axios
        .get(apiUrl)
        .then((response) => console.log(`SMS sent successful: `, response))
        .catch((err) => {
          console.error("Error sending SMS", err);
        });
    }
  };

  return (
    <section>
      <div className={style.wrapper}>
        <h1 style={{ textAlign: "center", fontSize: "30px" }}>SMS Page</h1>
        <div className={style.form_wrapper}>
          <div className={style.divider}>
            {/* RECEIVE SMS */}

            {/* <form action=""></form> */}

            <form className={style.form_2}>
              {/* SEND SMS */}
              <h1 className={style.heading_1}>Send a message to Customer</h1>
              <label htmlFor="">
                <p>Enter customer name: </p>
                <input
                  type="text"
                  className={style.input}
                  placeholder="Juan Dela Cruz"
                  value={customerName}
                  onChange={(e) => {
                    setCustomerName(e.target.value);
                    // console.log(customerName);
                  }}
                />
              </label>
              <label htmlFor="">
                <p>Enter customer phone number: </p>
                <input
                  type="tel"
                  className={style.input}
                  placeholder="639123456789"
                  value={customerPhoneNumber}
                  onChange={(e) => {
                    setCustomerPhoneNumber(e.target.value);
                    // console.log(customerPhoneNumber);
                  }}
                />
              </label>
              <label htmlFor="">
                <p>Enter your message:</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  maxLength="300"
                  placeholder="Place your agenda here. Maximum 300 characters."
                  className={style.input}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    console.log("Test name is", testName);
                  }}
                ></textarea>
              </label>

              <button className={style.form_btn} onClick={handleSendSMS}>
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SMSPage;
