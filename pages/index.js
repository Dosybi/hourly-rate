import Head from 'next/head'

import Description from '../components/Description'
import InputSection from '../components/InputSection'

const data = [
  {
    title: 'Работа и зарплата',
    inputs: [
      {
        label: 'Хочу зарабатывать',
        value: 500000,
        unit: '₸/мес',
      },
      {
        label: 'Буду работать',
        value: 5,
        unit: 'дней/нед',
      },
      {
        label: 'Рабочий день',
        value: 8,
        unit: 'часов',
      },
      {
        label: 'Потрачу на поиск заказов',
        value: 6,
        unit: 'часов/нед',
      },
    ],
  },
  {
    title: 'Регулярные расходы',
    hasButton: true,
    inputs: [
      {
        label: 'Аренда',
        value: 200000,
        unit: '₸/мес',
      },
      {
        label: 'Еда',
        value: 100000,
        unit: '₸/мес',
      },
    ],
  },
  {
    title: 'Отпуск и больничный',
    inputs: [
      {
        label: 'Отпуск',
        value: 24,
        unit: 'дней',
      },
      {
        label: 'Больничный',
        value: 7,
        unit: 'дней',
      },
    ],
  },
  {
    title: 'Налоги',
    inputs: [
      {
        label: 'Налог',
        value: 4,
        unit: '%',
      },
    ],
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>Калькулятор часовой ставки на фрилансе</title>
        <meta
          name="description"
          content="Калькулятор часовой ставки на фрилансе"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-2xl bg-white p-4">
        <Description />
        {data.map((section) => {
          return <InputSection {...section} key={section.title} />
        })}
      </main>
    </>
  )
}
