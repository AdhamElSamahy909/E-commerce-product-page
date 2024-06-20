import { createPortal } from "react-dom";

export default function Backdrop({ onClose }) {
  return createPortal(
    <div className="backdrop" onClick={onClose}></div>,
    document.getElementById("backdrop")
  );
}
