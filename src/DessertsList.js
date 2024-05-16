function DessertsList(props) {
  // Implement the component here.
  const fitDesserts = props.data
  .filter(objecto => objecto.calories <500)
  .sort((a, b) => a.calories - b.calories)

  return(
    <ul>
      {
        fitDesserts.map((postre, index) =>(
          <li key={index}>
            {postre.name} - {postre.calories} calories
          </li>
        )
      )}
    </ul>
  );  
}

export default DessertsList;
