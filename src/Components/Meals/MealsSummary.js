import classes from "./MealsSummary.module.css";
//Componente che si occupa di printare la descrizione del cibo disponibile 
const MealsSummery = () => {
  return (
    <section className={classes.summary}>
      <h2>Cibo buono</h2>
      <p>Scegli il tuo piatto preferito </p>
      <p>Tutti i piatti sono cucinati ad alta qualita'</p>
    </section>
  );
};

export default MealsSummery;
