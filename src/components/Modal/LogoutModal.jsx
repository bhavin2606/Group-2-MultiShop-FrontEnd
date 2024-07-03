import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Auth/AuthContext";

function LogoutModal() {
  const [show, setShow] = useState(false);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    // logout();
    localStorage.removeItem("isLoggedIn")
    toast.success("Logged Out Successfully!");
    handleClose();
    navigate("/", { replace: true });
  };

  return (
    <>
      <Button
        className="px-4 w-100 text-start border-0 bg-light"
        onClick={handleShow}
      >
        Logout
      </Button>

      <Modal show={show} className="mt-5" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logging Out!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to log out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutModal;
