function GenerationDonneeJson({ dataJson, className }) {
  if (typeof dataJson === 'string') {
    return (
      <p className={`${className}`}>
        {dataJson}
      </p>
    );
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

  export default GenerationDonneeJson;