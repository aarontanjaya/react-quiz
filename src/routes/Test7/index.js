import useRenderLog from "../../hooks/useRenderLog";
import Input from "./Input";
import Table from "./Table";

const Test7 = () => {
  useRenderLog("Test7", 1);
  let value = "";
  let setValue = null;
  const handleSubmit = (val) => {
    setValue && setValue(val);
    value = val;
  };
  const handleFilter = (q, item) => {
    const query = q ? q : "";
    return item.name.toLowerCase().includes(query.toLowerCase());
  };

  const initSearchValueAndSetter = (val, setVal) => {
    value = val ? val : value;
    setValue = setVal;
  };

  return (
    <div>
      <ul>
        <li>
          Please filter the table by name search (after press enter or click
          search button)
        </li>
        <li>
          No rerender allowed in <code>Test7</code> component
        </li>
      </ul>
      <Input onSubmit={handleSubmit} />
      <div>
        <Table filterFunc={handleFilter} init={initSearchValueAndSetter} />
      </div>
    </div>
  );
};

export default Test7;
