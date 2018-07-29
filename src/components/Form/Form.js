import React from "react";

const Form = props => (
  <form>
    <div className="form-group">
      <h4>
        <strong>Topic</strong>
      </h4>
      <input
        className="form-control"
        type="text"
        value={props.q}
        name="q"
        onChange={props.handleInputChange}
        required
      />
      <h4>
        <strong>Start Date</strong>
      </h4>
      <input
        className="form-control"
        type="date"
        value={props.start_year}
        name="start_year"
        onChange={props.handleInputChange}
        required
      />
      <h4>
        <strong>End Date</strong>
      </h4>
      <input
        className="form-control"
        type="date"
        value={props.end_year}
        name="end_year"
        onChange={props.handleInputChange}
        required
      />
    </div>
    <div className="pull-right">
      <button
        onClick={props.handleFormSubmit}
        type="submit"
        className="btn btn-lg btn-danger"
      >
        Submit
      </button>
    </div>
  </form>
);

export default Form;



// WEBPACK FOOTER //
// ./src/components/Form/Form.js