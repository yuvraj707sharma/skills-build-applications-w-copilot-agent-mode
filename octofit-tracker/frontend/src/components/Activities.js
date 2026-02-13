import React from 'react';

const Activities = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
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
      <h2 className="mb-4 text-primary">Activities</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {data.map((activity, idx) => (
            <tr key={activity.id || idx}>
              <td>{activity.id}</td>
              <td>{activity.name}</td>
              <td>{activity.date}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Activities;
