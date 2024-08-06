import React,{useId} from 'react'

function inputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption=[],
  selectCurrecy ="usd",
  amountDisable = false,
  currencyDisable = false,
  className =""
}) {
  const amountInputId = useId();
  return (
    <div className= {`bg-white p-3 rounded-lg text-sm flex
    ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amountInputId} 
          className="outline-none w-full bg-transparent py-1.5"
          type='number'
          placeholder='Amount'
          value = {amount}
          disabled={amountDisable}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value)) }
          >
        </input>
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className= "text-black/40 mb-2 w-full">
          CUrrency Type
        </p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 coursor-pointer outline-none"
          value ={selectCurrecy}
          onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled = {currencyDisable}
        >
          {/* <option value="usd">
            USD
          </option> */}
          {currencyOption.map((currency) => (
            <option key={currency} value={currency} >
              {currency}
            </option>) )}
        </select>
      </div>
    </div>
  )
}

export default inputBox;
