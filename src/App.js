import { useState } from 'react';
import './App.css';

function App() {
  const [loanAmount, setLoanAmount] = useState(14500000);
  const [loanPeriod, setLoanPeriod] = useState(12);

  const maxLoanAmount = 17484500;
  const minLoanAmount = 1000000;
  const minLoanPeriod = 6;
  const maxLoanPeriod = 18;

  const interestRate = 0.1;
  const interest = loanAmount * interestRate;
  const totalAmount = loanAmount + interest;
  const estimatedInstallment = Math.floor(totalAmount / loanPeriod);

  const handleApplyLoan = () => {
    console.log("Loan Details:", { loanAmount, loanPeriod, estimatedInstallment });
    alert("Loan details logged to console!");
  };


  return (
    <div className='app'>
    <div className="mainContainer">

      <h2 className='title'>
        Loan Calculator
      </h2>

      <div className='maxFunding'>
        <p className='fundingTitle'>Max Funding</p>
        <h3 className='fundingAmount'>Rp {maxLoanAmount.toLocaleString()}</h3>
        <p className='vehicle'>Honda ADV 150 CBS - 2022</p>
      </div>

      <div className='sliderContainer'>
        <p className='label'>Loan Amount</p>
        <p className='value'>Rp {loanAmount.toLocaleString()}</p>
        <input
          type="range"
          min={minLoanAmount}
          max={maxLoanAmount}
          step={500000}
          value={loanAmount}
          onChange={(e)=>setLoanAmount(Number(e.target.value))}
          className='slider'
        />
        <div className='sliderLabels'>
          <span>Rp {minLoanAmount.toLocaleString()}</span>
          <span>Rp {maxLoanAmount.toLocaleString()}</span>
        </div>
        
      </div>

      <div className='sliderContainer'>
        <p className='label'>Loan Period</p>
        <p className='value'>{loanPeriod.toLocaleString()} Months</p>
        <input
          type="range"
          min={minLoanPeriod}
          max={maxLoanPeriod}
          step={1}
          value={loanPeriod}
          onChange={(e)=>setLoanPeriod(Number(e.target.value))}
          className='slider'
        />
        <div className='sliderLabels'>
          <span>{minLoanPeriod} Months</span>
          <span>{maxLoanPeriod} Months</span>
        </div>
        
      </div>

      
    </div>
    <div className='installmentContainer'>
        <p className='label'>Estimated Monthly Installments</p>
        <h3 className='installmentAmount'>Rp {estimatedInstallment.toLocaleString()}</h3>
        <p className='note'>
          Installment fees may change according to the results of the verification or the physical condition of the vehicle at the branch office.
        </p>
      

      <button className='applyButton' onClick={handleApplyLoan}>
        APPLY LOAN
      </button>
      </div>
    </div>
  );
}

export default App;
