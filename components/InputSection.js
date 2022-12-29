import Button from './Button'
import Input from './Input'

const InputSection = ({ title, inputs, hasButton }) => {
  return (
    <div className="mb-6 rounded-xl bg-gray-100 p-6">
      <div className="mb-4 text-xl font-bold">{title}</div>
      <div className="flex flex-wrap gap-x-4">
        {inputs.map((input) => {
          return <Input {...input} key={input.label} />
        })}
      </div>
      {hasButton && <Button label="+ Добавить" />}
    </div>
  )
}

export default InputSection
