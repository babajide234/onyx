import React, { useState } from 'react';

const StepComponent = ({ children }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const steps = React.Children.toArray(children);


  return (
    <>
        {steps[currentStep]}
    </>
  )
}

export default StepComponent