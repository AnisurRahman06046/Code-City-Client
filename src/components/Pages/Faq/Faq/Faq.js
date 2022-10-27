import React from "react";

const Faq = () => {
  return (
    <div className="mt-10">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
          Is there any period of time to enroll the course ?
        </div>
        <div className="collapse-content">
          <p>
            No it is self paced course so you can enroll anytime according to
            your comfort zone
          </p>
        </div>
      </div>
      <div className="mt-5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What is the refund policy ?
          </div>
          <div className="collapse-content">
            <p>
              You can apply for refund withing 15 working days after your
              enrolling.No hidden charges
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            What are the payment system ?
          </div>
          <div className="collapse-content">
            <p>Visa card,Master card,Bkash,Nagad are available</p>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Is there any certification after completion of course ?
          </div>
          <div className="collapse-content">
            <p>
              Yes after completing the course successfully we will provide a
              certificate .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
