function Logement({ dataJson, className, balise }) {
  if (typeof dataJson === 'string') {
    switch (balise) {
      case "p":
        return <p className={className}>{dataJson}</p>;
      case "h3":
        return <h3 className={className}>{dataJson}</h3>;
      default:
        return <div className={className}>{dataJson}</div>;
    }
  } else if (Array.isArray(dataJson)) {
    const GenerationDonneeJsonElements = dataJson.map((item, index,) => (
      <li key={index} className={`${className} n${index + 1}`}>{item}</li>
    ));

    return (
      <ul className={`${className}`}>
        {GenerationDonneeJsonElements}
      </ul>
    );
  }
}

  export default Logement;