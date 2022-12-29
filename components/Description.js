const content = {
  title: 'Калькулятор часовой ставки на фрилансе',
  text: [
    'Фрилансерам бывает сложно определить, сколько денег просить за работу.',
    'Калькулятор помогает посчитать часовую ставку с учётом регулярных расходов, времени на поиск заказчиков, отпуска, налогов и возможных больничных.',
  ],
}

const Description = () => {
  return (
    <div className="mt-2 mb-8">
      <h1 className="mb-2 text-2xl font-bold">{content.title}</h1>
      {content.text.map((paragraph) => {
        return (
          <p className="first-of-type:mb-1" key={paragraph}>
            {paragraph}
          </p>
        )
      })}
    </div>
  )
}

export default Description
