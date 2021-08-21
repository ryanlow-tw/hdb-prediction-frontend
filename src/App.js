import TownDropDown from "./components/form/TownDropDown";
import InputFields from "./components/form/InputFields";

const App = () => {
  return (
    <div className="App">
      <form className="input-box" noValidate autoComplete="off">
        <TownDropDown />
        <InputFields />
      </form>
    </div>
  );
};

export default App;
