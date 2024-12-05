import React from "react";

export default function TimeChallenge({ title, targtTime }) {
  return (
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {targtTime} segund{targtTime > 1 ? "s" : ""}
      </p>
      <p>
        <button>Start Challenge</button>
      </p>
      <p>Time is running... / Time inactive</p>
    </section>
  );
}
