import { useState } from "react";
import Input from "./Input";
import Table from "./Table";
import DATA from "./_data";

const Test4 = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const handleFilter = (q, item) => {
    const query = q ? q : ""
    return item.name.toLowerCase().includes(query.toLowerCase())
  }
  const handleSubmit = (q)=>{
    setSearchQuery(q)
  }
  return(
    <div>
      <ul>
        <li>Please render data into the table</li>
        <li>Please filter the table by name search (after press enter or click search button)</li>
      </ul>
      <Input onSubmit={handleSubmit} />
      <div>
        <Table data={DATA} filterFunc={handleFilter} query={searchQuery}  />
      </div>
    </div>
  )
}

export default Test4;