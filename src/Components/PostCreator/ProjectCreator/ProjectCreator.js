// @desc       Create Project
// @access     Private

import React, { Component } from "react";
export class ProjectCreator extends Component {
  render() {
    return (
      <div>
        <form>
          <div>
            <label>Title:</label>
            <input />
          </div>
          <div>
            <label>Sub-Title:</label>
            <input />
          </div>
          <div>
            <label>Description:</label>
            <input />
          </div>
          <div>
            <label>Date Created:</label>
            <input />
          </div>
          <div>
            <label>Technologies:</label>
            <input />
          </div>
          <div>
            <label>Github:</label>
            <input />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ProjectCreator;
