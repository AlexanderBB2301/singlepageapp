import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <>
        <div>
          <div className="pageList"></div>
          <h2>Send us a Message</h2>
        </div>
        <div>
          <form className="contactForm">
            <label>Full Name</label>
            <input type="text" placeholder="Please Enter Full Name"></input>
            <label>Email</label>
            <input
              type="email"
              placeholder="Please Enter Your Email Adress"
            ></input>
            <label>Message</label>
            <textarea placeholder="Please enter your message here"></textarea>
            <button type="sumbit">Send Message</button>
          </form>
        </div>
        <div className="contactUs">
          <h2>Do you need to contact us?</h2>
        </div>
      </>
    );
  }
}
export default Contact;
