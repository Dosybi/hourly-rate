const Input = ({ label, value, unit, isSmall }) => {
  return (
    <div
      className={`relative mb-4 flex items-end ${isSmall ? 'w-1/3' : 'w-full'}`}
    >
      <div className="w-full">
        <label className="block text-sm font-medium text-gray-900">
          {label}
        </label>
        <input
          type="number"
          inputMode="numeric"
          className="mt-1 h-10 w-full appearance-none rounded-md border-gray-800 px-2 shadow-sm"
          placeholder={value}
          // onChange={(e) => handleInputChange(title, e.target.value)}
        />
      </div>
      <div className="absolute right-4 pb-2">{unit}</div>
    </div>
  )
}

export default Input
