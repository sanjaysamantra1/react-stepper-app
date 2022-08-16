import React, { useState } from "react";
import "./MyStepper.css";
// import Stepper from "react-stepper-horizontal";

export default function MyStepper(props) {
  const { stepsData } = props;
  const [page, setPage] = useState(0);
  // const [currentStep, setCurrentStep] = useState(0);
  const nextPage = () => {
    setPage(page + 1);
  };
  const prevPage = () => {
    setPage(page - 1);
  };
  const updatePage = (page) => {
    setPage(page);
  };
  return (
    <>
      {/* <Stepper steps={stepsData} activeStep={page} /> */}
      <div className="stepWrapper">
        {stepsData.map((step, index) => (
          <Step
            key={index}
            index={index}
            label={step.title}
            selected={page === index}
            updateStep={updatePage}
          />
        ))}
      </div>
      {stepsData[page].component(props)}
      {page !== 0 ? <button onClick={prevPage} className='btn btn-secondary'>Previous</button> : null}
      &nbsp; &nbsp;
      {page !== stepsData.length - 1 ? (
        <button onClick={nextPage} className='btn btn-secondary'>Next</button>
      ) : null}
    </>
  );
}

function Step(props) {
  return (
    <div className={"stepBlock " + (props.selected ? "selected" : "")}>
      <span>{props.label}</span>
      <div
        className="circleWrapper"
        onClick={() => props.updateStep(props.index)}
      >
        <div className="circle"></div>
      </div>
    </div>
  );
}
