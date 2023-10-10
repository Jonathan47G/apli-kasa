import RecuperationDeIdActuel from "./RecuperationIdDeLaPage";

function GenerationDesTags({dataJson, data}) {
    const logementActuel = RecuperationDeIdActuel();
    const GenerationListe = logementActuel.dataJson.map((tag, index) =>(
        <div key={index} className={`Tag n°${index + 1}`}> {logementActuel} </div>
    ))
    return (
      <>
        {GenerationListe}
      </>
    );
  }
  
  export default GenerationDesTags;