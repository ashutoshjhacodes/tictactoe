const Square = ({ value }) => {
    const handleClick=()=>{
        style={{background-color:yellow}};
    }
  return (
    <>
      <button className="square" onClick={handleClick}>{value}</button>
    </>
  );
};
export default Square;
