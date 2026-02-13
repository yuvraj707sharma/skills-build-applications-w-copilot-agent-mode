import React from 'react';

const Workouts = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;
    console.log('Fetching from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(json => {
        const results = json.results || json;
        setData(results);
        console.log('Fetched data:', results);
      });
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-danger">Workouts</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((workout, idx) => (
            <tr key={workout.id || idx}>
              <td>{workout.id}</td>
              <td>{workout.name}</td>
              <td>{workout.type}</td>
              <td>{workout.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workouts;
