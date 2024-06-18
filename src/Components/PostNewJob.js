import React from "react";

export default function PostNewJob() {
  return (
    <>
      <div className="container">
        <div className="col-12 form_container justify-content-center align-item-center w-100 100-vh ">
          <div>
            <form action="">
              <div className="#">
                <label htmlFor="job title" className="label-control">
                  Job Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="please Enter Job"
                />
              </div>
              <div>
                <label htmlFor="degree" className="label-control">
                  Degree
                </label>
                <select name="select" id="">
                  <option value="0">MCA</option>
                  <option value="1">BBA</option>
                  <option value="2">BCA</option>
                  <option value="3">B.Tech</option>
                  <option value="4">M.Tech</option>
                </select>
              </div>
              <div>
                <label htmlFor="skill" className="label-control">
                  Skill
                </label>
                <select name="select" id="">
                  <option value="0">ASP.Net</option>
                  <option value="1">Java</option>
                  <option value="2">React Js</option>
                  <option value="3">Angular</option>
                  <option value="4">.Net</option>
                </select>
              </div>
              <div>
                <label htmlFor="salary" className="label-control">
                  Salary
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your salary."
                />
              </div>
              <div>
                <label htmlFor="exprience" className="label-control">
                  Exprience
                </label>
                <select name="select" className="form-control" id="">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <div>
                <label htmlFor="vacancy" className="label-control">
                  No of Vacancy
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter No of Vacancy"
                />
              </div>
              <div clas>
                <label htmlFor="details" className="label-control">
                  Details
                </label>
                <textarea name="text" id="" rows="3"></textarea>
              </div>
              <div>
                <input type="submit" className="btn btn-outline-primary">
                  Post Job
                </input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
