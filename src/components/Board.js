import Square from "./Square";
import '../css/square.css';
const Board = () => {
  return (
    <div className="board">
      <div className="boadRow">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div className="boadRow">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
      <div className="boadRow">
        <Square value="1" />
        <Square value="1" />
        <Square value="1" />
      </div>
    </div>
  );
};
export default Board;
