// import DATA from "./_data";
import Row from "./Row";
const Table = ({ data, filterFunc, query }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
        {data &&
          data.map((item, idx) =>
            !filterFunc || (filterFunc && filterFunc(query, item)) ? (
              <Row
                key={`${item.name}+${idx}`}
                name={item.name}
                age={item.age}
                address={item.address}
              />
            ) : null
          )}
      </thead>
    </table>
  );
};

export default Table;
