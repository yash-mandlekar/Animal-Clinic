import React from 'react';

const Update = ({update,submitUpdate}) => {
  return (
    <div>
        <h1>
            <center>
              Update Your Pet Information :
            </center>
          </h1>
      <form onSubmit={submitUpdate} className="updateform">
            <textarea defaultValue={update.Image} name='image'></textarea>
            <textarea defaultValue={update.Animal} name='animal'></textarea>
            <textarea defaultValue={update.Health_Status} name='health'></textarea>
            <textarea defaultValue={update.Weight} name='weight'></textarea>
            <textarea defaultValue={update.Other_Issues} name='issue'></textarea>
            <button>Update Information</button>
          </form>
    </div>
  );
}

export default Update;
