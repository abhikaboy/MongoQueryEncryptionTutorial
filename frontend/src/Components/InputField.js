import React from 'react'

export default function InputField({ placeholder, type, update, value }) {
  console.log(placeholder)
  return (
    <input
      class="bg-slate-800 rounded-md p-3 mb-2 w-2/3
       focus:bg-slate-700 focus:border-white focus:border-1 
       transition-all duration-500"
      type={type}
      value={value}
      onChange={(e) => update(e.target.value)}
      placeholder={placeholder}
    ></input>
  )
}
