import React from 'react';
import Form from "./Form"

export default function Contact() {
  return (
    <div className="container py-4 card shadow-lg p-3 mb-5">
      <div className="border-bottom pb-2 mb-3">
        <h3 className="title fs-4 text-muted">Contact Me</h3>
      </div>
      <div
        className="container card shadow-lg text-center text-info bg-dark fs-2 justify-content-center">
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
}
