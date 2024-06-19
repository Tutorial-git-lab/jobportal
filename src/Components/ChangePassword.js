import React from "react";
export default function MyAccount() {
  return (
    <div className="d-flex align-item-center justify-content-center w-80 vh-40 ">
      <div className="form_container rounded bg-white w-80 my-3">
        <div className="row">
          <div className="d-flex justify-content-center border">
            <h5 className="text-center mb-3 my-2 ">Change Password</h5>
          </div>

          <div className="col-12 d-flex-col p-3 border">
            <div className="form-group d-flex mb-2 my-3 row">
              <label
                htmlFor="newPassword"
                className="form-label col-4 text-end"
              >
                <strong>New Password:</strong>
              </label>
              <input
                type="password"
                className="col-6"
                placeholder="Enter new password"
              />
            </div>
            <div className="form-group d-flex mb-2 my-3 row">
              <label
                htmlFor="confirm-password"
                className="form-label col-4 text-end"
              >
                <strong>Confirm Password:</strong>
              </label>
              <input
                type="password"
                className="col-6"
                placeholder="Enter confirm-password"
              />
            </div>

            <div className="text-center p-2">
              <button type="submit" className="btn btn-success">
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
