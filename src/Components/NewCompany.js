import React from "react";

export default function NewCompany() {
  return (
    <>
      <div className="container justify-content-center w-50 vh-100 border ">
        <div className="text-center my-3">
          <h6>New Company Registration</h6>
        </div>

        <form
          action=""
          className=" container justify-content-center w-70 vh-50"
        >
          <div className="d-flex p-3 my-1">
            <label htmlFor="name" className="label-control">
              Name:
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="d-flex p-3 my-1">
            <label htmlFor="email" className="label-control">
              Email:
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="d-flex p-3 my-1">
            <label htmlFor="password" className="label-control">
              Password:
            </label>
            <input type="text" className="form-control" />
          </div>
        </form>
      </div>
    </>
  );
}
