import React from 'react';

const Leaderboard = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;
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
      <h2 className="mb-4 text-success">Leaderboard</h2>
      <table className="table table-striped table-bordered">
        <thead className="table-dark">
          <tr>
            <th>Rank</th>
            <th>User</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, idx) => (
            <tr key={entry.id || idx}>
              <td>{entry.rank || idx + 1}</td>
              <td>{entry.user}</td>
              <td>{entry.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
