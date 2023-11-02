const Input = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit(formData.get("search"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="search" type="text" placeholder="search" />
      <button type="submit">🔍</button>
    </form>
  );
};

export default Input;
