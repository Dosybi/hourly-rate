import { HiOutlineTrash } from 'react-icons/hi'

const Input = ({ label, value, unit, isSmall, isEditable }) => {
  return (
    <div
      className={`relative mb-4 flex items-end ${isSmall ? 'w-2/5' : 'w-full'}`}
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
      <div className={`absolute pb-2 ${isEditable ? 'right-14' : 'right-4'}`}>
        {unit}
      </div>
      {isEditable && (
        <HiOutlineTrash className="ml-4 mb-1 cursor-pointer text-3xl text-gray-400 hover:text-gray-600" />
      )}
    </div>
  )
}

export default Input
