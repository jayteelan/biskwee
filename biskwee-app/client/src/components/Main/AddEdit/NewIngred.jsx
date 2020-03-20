import React from "react";

const NewIngred = props => {
  return (
    <li>
      <input
        id="qty"
        type="number"
        placeholder="qty"
        onChange={e => props.onNewIngredQty(e)}
      />

      <select id="unit" onChange={e => props.onNewIngredUnit(e)}>
        <option disabled selected>
          unit
        </option>
        {props.allUnits &&
          props.allUnits.map((unit, i) => (
            <option value={unit.id} key={i}>
              {unit.name}
            </option>
          ))}
      </select>

      <select id="ingredient" onChange={e => props.onNewIngredIngred(e)}>
        <option disabled selected>
          ingredient
        </option>
        {props.allIngredients &&
          props.allIngredients.map((ingred, i) => (
            <option value={ingred.id} key={i}>
              {ingred.name}
            </option>
          ))}
      </select>

      <i className="material-icons" onClick={e => props.setIngredNew(e)}>
        add_circle_outline
      </i>
    </li>
  );
};

export default NewIngred;
