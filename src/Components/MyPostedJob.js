import React from "react";
export default function PostNewJob() {
  return (
    <div className="d-flex align-item-center justify-content-center w-80 vh-40 ">
      <div className="form_container rounded bg-white w-80 my-3">
        <div className="row">
          <div className="d-flex justify-content-center">
            <h6 className="text-center mb-3 my-1 ">Post New Job</h6>
          </div>

          <div className="border">
            <div className="form-group d-flex p-1 mb-2 row">
              <label htmlFor="select" className="form-label col-4 text-end">
                <strong>Select Job:</strong>
              </label>
              <select name="select" id="select" className="col-4">
                <option value="0" className="form-control">
                  ASP.Net
                </option>
                <option value="1" className="form-control">
                  Angular
                </option>
                <option value="2" className="form-control">
                  React Js
                </option>
                <option value="3" className="form-control">
                  .Net
                </option>
                <option value="4" className="form-control">
                  Java
                </option>
              </select>
              <div className="col-4">
                <input type="submit" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
