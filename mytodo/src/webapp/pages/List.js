import React, { Fragment } from "react";
import Item from "../components/Item";
function List() {
  return (
    <Fragment>
      {/* <!-- This section should be hidden by default and shown when there are todos --> */}
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <Item />
      </section>
    </Fragment>
  );
}
export default List;
