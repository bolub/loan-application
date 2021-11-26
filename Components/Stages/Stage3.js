import React from 'react';
import Input from '../Input';
import Header from '../UI/Header';
import Label from '../UI/Label';

const Stage3 = ({ setInput, loanInfo }) => {
  return (
    <>
      <Header
        title='Loan Information'
        description='Please tell us about the loan type'
      />

      <div className='mt-8'>
        {/* lOAN tYPE */}
        <div className='mb-8'>
          <Label title='Loan Type' lFor='loantype' />

          <select
            className='w-full my-auto bg-white py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
            id='loantype'
            name='loantype'
            onChange={(e) => setInput('loantype', e.target.value)}
            value={loanInfo.loantype}
          >
            <option>Select Loan Type</option>

            <option value='Paylater Rent'>Paylater Rent</option>
            <option value='Paylater Transport Fare'>
              Paylater Transport Fare
            </option>
            <option value='Paylater School Fees'>Paylater School Fees</option>
            <option value='Paylater Transport Medical Fees'>
              Paylater Transport Medical Fees
            </option>
            <option value='Paylater Moni'>Paylater Moni</option>
          </select>
        </div>

        {/* Loan amount */}
        <div className='mb-8'>
          <Label title='Loan Amount' lFor='loanamount' />

          <Input
            type='text'
            id='loanamount'
            name='loanamount'
            placeholder='500,000'
            required
            onChange={(e) => setInput('loanamount', e.target.value)}
            value={loanInfo.loanamount}
          />
        </div>

        {/* tenor */}
        <div>
          <Label title='Tenor' lFor='tenor' />

          <select
            className='w-full my-auto bg-white py-3 px-5 border-gray-200 rounded-md mr-2 focus:outline-none  focus:border-blue-500 border-2 placeholder-gray-400'
            id='tenor'
            name='tenor'
            onChange={(e) => setInput('tenor', e.target.value)}
            value={loanInfo.tenor}
          >
            <option>Select Tenor</option>
            <option value='3 Months'>3 Months</option>
            <option value='4 Months'>4 Months</option>
            <option value='5 Months'>5 Months</option>
            <option value='6 Months'>6 Months</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Stage3;
