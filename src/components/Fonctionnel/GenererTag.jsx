import RecuperationDeIdActuel from "./RecuperationIdDeLaPage";

function GenerationDesTags() {
    const tag = RecuperationDeIdActuel();
    const tagGenerationListe = tag.tags.map((tag, index) =>(
        <li key={index} className={`Tag n°${index + 1}`}> {tag} </li>
    ))
    return (
      <>
      
        {tagGenerationListe}
      </>
    );
  }
  
  export default GenerationDesTags;
  