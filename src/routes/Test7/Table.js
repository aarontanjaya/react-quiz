import DATA from "./_data";
import { useEffect, useState } from "react";
const Table = ({filterFunc, init }) => {
  const [query, setQuery] = useState("")
  useEffect(()=>{
    init(query, setQuery)
  },[])
  useEffect(()=>{
    console.log('tesa')
  }, [query])
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {DATA.map((eachrow, idx) =>
          !filterFunc || (filterFunc && filterFunc(query, eachrow)) ? (
            <tr key={idx}>
              <td>{eachrow.name}</td>
              <td>{eachrow.age}</td>
              <td>{eachrow.address}</td>
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  );
};

export default Table;
