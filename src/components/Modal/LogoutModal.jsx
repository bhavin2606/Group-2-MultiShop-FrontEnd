import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePostLogoutDataMutation } from "../../Redux/Slices/AuthApis";
import { useDispatch } from "react-redux";
import { getUserToken } from "../../Redux/Slices/AuthSlice";

function LogoutModal() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const [postLogoutData] = usePostLogoutDataMutation();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  const handleLogout = async () => {
    let res = await postLogoutData({ token: localStorage?.getItem("token") });
    console.log("res", res);
    if (res?.data?.success === true) {
      navigate("/", { replace: true });
      toast.success("LoggedOut successfully");
      localStorage.clear("token");
      dispatch(getUserToken(""))
      
    } else {
      toast.error("Something went wrong");
    }
    
    handleClose();
  };

  return (
    <>
      <Button
        className="px-4 w-100 text-start border-0 bg-light btn-danger"
        onClick={handleShow}
      >
        <i className="fas fa-sign-out-alt mr-2" style={{color: "#ffd333"}}></i>
        Sign Out
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
