import React, { useState } from "react";
import "../styles/App.css";
let temp = 0;
const Calculator = () => {
  return (
    <div className="container">
      <div className="content">
        <p className="title">Tip Calculator</p>
        <p className="paragraph">(with splits)</p>
        <p className="paragraph">Save your time with our calculator</p>

        <input
          className="input"
          type="number"
          id="bill-amount"
          placeholder="Bill ($)"
        />
        <div>
          <input
            className="input input-left"
            type="number"
            id="tip-amount"
            placeholder="Tip (%)"
          />
          <input
            className="input input-right"
            type="number"
            id="tax-amount"
            placeholder="Tax (%)"
          />
        </div>
        <input
          className="input"
          type="number"
          id="people-count"
          placeholder="Number of people"
        />

        <div className="calculations">
          <div className="calculation text-left">
            <h1 id="tip">Tip: ${temp.toFixed(2)}</h1>
            <p id="tip-divided">
              Tip per person: <br /> ${temp.toFixed(2)}
            </p>
          </div>
          <div className="calculation text-right">
            <h1 id="total">Total: ${temp.toFixed(2)}</h1>
            <p id="total-divided">
              Total per person: <br /> ${temp.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
