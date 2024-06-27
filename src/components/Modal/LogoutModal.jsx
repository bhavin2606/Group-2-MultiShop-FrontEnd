import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LogoutModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let navigate = useNavigate();

  function handleLogout() {
    navigate("/");
    localStorage.setItem("isLoggedIn", false);
    handleClose();
    toast.success("Logged Out Successfully!", {
      position: "top-right",
      marginTop: "2%",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <>
      <Button className="px-4 w-100 text-start border-0 bg-light " onClick={handleShow}>
        Logout
      </Button>

      <Modal show={show} className="mt-5" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Logging Out!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you are sure, you want to Logged Out?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleLogout}>
            Logged Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LogoutModal;
