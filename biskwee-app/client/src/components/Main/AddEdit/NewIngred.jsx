import React from "react";

const NewIngred = props => {
  return (
    <li>
      <input id="qty" type="number" placeholder="qty" />

      <select id="unit">
        <option disabled selected>
          unit
        </option>
        {props.allUnits.map((unit, i) => (
          <option value={unit.id} key={i}>
            {unit.name}
          </option>
        ))}
      </select>

      <select id="ingredient">
        <option disabled selected>
          ingredient
        </option>
        {props.allIngredients.map((ingred, i) => (
          <option value={ingred.id} key={i}>
            {ingred.name}
          </option>
        ))}
      </select>

      <i
        class="material-icons"
        // onClick={props.handleIngredSubmit}
      >
        add_circle_outline
      </i>
    </li>
  );
};

export default NewIngred;
