
const renderTable = (gameStarted, selectedBox, handleBoxClick) => {
    if (gameStarted) {
      const tableRows = [];
      for (let row = 0; row < 3; row++) {
        const cells = [];
        for (let col = 0; col < 3; col++) {
          const boxIndex = row * 3 + col;
          const isBoxSelected = boxIndex === selectedBox;

          cells.push(
            <td
              key={col}
              onClick={() => handleBoxClick(boxIndex)}
              className={isBoxSelected ? 'selected-box' : ''}
            >
              {isBoxSelected ? 'Click me!' : ''}
            </td>
          );
        }
        tableRows.push(<tr key={row}>{cells}</tr>);
      }

      return (
        <table>
          <tbody>{tableRows}</tbody>
        </table>
      );
    } else {
      return null;
    };
}

export default renderTable