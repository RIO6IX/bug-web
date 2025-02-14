
export function Report() {
    return (
      <div className="container mt-5">
        <h2>Report a Vulnerability</h2>
        <p>Submit a new security report.</p>
        <form>
          <input type="text" placeholder="Title" className="form-control mb-2" />
          <textarea placeholder="Description" className="form-control mb-2"></textarea>
          <button className="btn btn-primary">Submit Report</button>
        </form>
      </div>
    );
  }