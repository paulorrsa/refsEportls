import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  const userLost = remainingTime !== null && remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round(
    remainingTime && targetTime
      ? (1 - remainingTime / (targetTime * 1000)) * 100
      : 0
  );

  useImperativeHandle(ref, () => ({
    open() {
      if (dialog.current) {
        dialog.current.showModal();
      }
    },
  }));

  const modalContainer = document.getElementById("modal");
  if (!modalContainer) {
    console.error("Modal container not found in the DOM.");
    return null;
  }

  return createPortal(
    <dialog ref={dialog} className="result-modal">
      {userLost ? <h2>You Lost</h2> : <h2>Your Score: {score}</h2>}
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped the time with{" "}
        <strong>{formattedRemainingTime || 0} seconds left.</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    modalContainer
  );
});

export default ResultModal;
