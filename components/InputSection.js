import Button from './Button'
import Input from './Input'

const InputSection = ({
  title,
  description,
  inputs,
  hasButton,
  handleButtonClick,
}) => {
  return (
    <div className="mb-6 rounded-xl bg-gray-100 p-6">
      <div className={`text-xl font-bold ${description ? 'mb-1' : 'mb-4'}`}>
        {title}
      </div>
      {description && <div className="mb-4">{description}</div>}
      <div className="flex flex-wrap gap-x-4">
        {inputs.map((input) => {
          return <Input {...input} key={input.label} />
        })}
      </div>
      {hasButton && (
        <Button label="+ Добавить" handleButtonClick={handleButtonClick} />
      )}
    </div>
  )
}

export default InputSection
