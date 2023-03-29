import React, { useRef } from "react";

export default function AddTask() {
  const nameRef = useRef("");
  const handLeSubmit = (e) => {
    e.preventDefault();
    console.log(nameRef.current.value);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5 shadow-sm">
            <div className="card-header">
              <h6 ref={nameRef}>Ajouter une nouvelle tache</h6>
            </div>
            <div className="card-bodey">
              <form onSubmit={handLeSubmit}>
                <div className="form-group mt-3">
                  <label htmlFor="task">Nom de tâche</label>
                  <input
                    ref={nameRef}
                    type="text"
                    id="task"
                    className="form-control"
                    placeholder="Enter...."
                  />
                </div>
                <div className="form-group mt-3">
                  <button className="btn btn-primay w-100">Click</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
