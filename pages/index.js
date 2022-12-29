import Head from 'next/head'
import { useState } from 'react'

import Description from '../components/Description'
import InputSection from '../components/InputSection'

const initialData = [
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
        unit: 'дн/нед',
        isSmall: true,
      },
      {
        label: 'Рабочий день',
        value: 8,
        unit: 'часов',
        isSmall: true,
      },
      {
        label: 'Потрачу на поиск заказов',
        value: 6,
        unit: 'часов/нед',
        isSmall: true,
      },
    ],
  },
  {
    title: 'Регулярные расходы',
    description:
      'Укажите свой прожиточный минимум — расходы, без которых вы не проживёте. Эти данные нужны, чтобы вычислить ставку, ниже которой нельзя опускаться.',
    hasButton: true,
    inputs: [
      {
        label: 'Аренда',
        value: 200000,
        unit: '₸/мес',
        isEditable: true,
      },
      {
        label: 'Еда',
        value: 100000,
        unit: '₸/мес',
        isEditable: true,
      },
    ],
  },
  {
    title: 'Отпуск и больничный',
    inputs: [
      {
        label: 'Отпуск',
        value: 24,
        unit: 'дн/год',
        isSmall: true,
      },
      {
        label: 'Больничный',
        value: 7,
        unit: 'дн/год',
        isSmall: true,
      },
    ],
  },
  {
    title: 'Налоги',
    inputs: [
      {
        label: '',
        value: 4,
        unit: '%',
        isSmall: true,
      },
    ],
  },
]

export default function Home() {
  const [data, setData] = useState(initialData)
  const [workingDaysWeekly, setWorkingDaysWeekly] = useState(5)
  const [workingDaysMonthly, setWorkingDaysMonthly] = useState()
  const [workingDaysYearly, setWorkingDaysYearly] = useState()
  const [workingHoursDaily, setWorkingHoursDaily] = useState(8)
  const [workingHoursMonthly, setWorkingHoursMonthly] = useState(8)
  const [vacationDays, setVacationDays] = useState(24)
  const [sickLeaveDays, setSickLeaveDays] = useState(7)
  const [clientsSearchHours, setClientsSearchHours] = useState(6)
  const [payedHoursMonthly, setPayedHoursMonthly] = useState()
  const [incomeMonthly, setIncomeMonthly] = useState(500000)
  const [tax, setTax] = useState(4)
  const [incomeWithTax, setIncomeWithTax] = useState(4)
  const [hourlyRate, setHourlyRate] = useState()

  const getWorkingDays = (number) => {
    const newWorkingDaysWeekly = number
    const newWorkingDaysMonthly =
      (newWorkingDaysWeekly * 52 - vacationDays - sickLeaveDays) / 12
    const newWorkingDaysYearly =
      newWorkingDaysWeekly * 52 - vacationDays - sickLeaveDays
    setWorkingDaysWeekly(newWorkingDaysWeekly)
    setWorkingDaysMonthly(newWorkingDaysMonthly)
    setWorkingDaysYearly(newWorkingDaysYearly)
  }

  const getVacationDays = (number) => {
    const newVacationDays = number
    setVacationDays(newVacationDays)
  }

  const getSickLeaveDays = (number) => {
    const newSickLeaveDays = number
    setSickLeaveDays(newSickLeaveDays)
  }

  const getClientsSearchHours = (number) => {
    const newClientsSearchHours = number
    setClientsSearchHours(newClientsSearchHours)
  }

  const getWorkingHours = (number) => {
    const newWorkingHoursDaily = number
    const newWorkingHoursMonthly =
      number * workingDaysMonthly - clientsSearchHours * 4.5
    setWorkingHoursDaily(newWorkingHoursDaily)
    setWorkingHoursMonthly(newWorkingHoursMonthly)
  }

  const getPayedHoursMonthly = () => {
    const newPayedHoursMonthly =
      workingDaysMonthly * workingHoursDaily - clientsSearchHours * 4.5
    setPayedHoursMonthly(newPayedHoursMonthly)
  }

  const getIncomeMonthly = (number) => {
    const newIncomeMonthly = number
    const newIncomeWithTax =
      newIncomeMonthly + (newIncomeMonthly / 100 - tax) * 100
    setIncomeMonthly(newIncomeMonthly)
    setIncomeWithTax(newIncomeWithTax)
  }

  const getTax = (number) => {
    const newTax = number
    setTax(newTax)
  }

  const getHourlyRate = () => {
    const newHourlyRate = incomeWithTax / payedHoursMonthly
    setHourlyRate(newHourlyRate)
  }

  const addExpense = () => {
    const newExpense = prompt('Название')
    if (newExpense != '') {
      const newData = [...data]
      newData[1].inputs.push({
        label: newExpense,
        value: 0,
        unit: '₸/мес',
        isEditable: true,
      })
      setData(newData)
    }
  }

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
          return (
            <InputSection
              {...section}
              key={section.title}
              handleButtonClick={addExpense}
            />
          )
        })}
      </main>
    </>
  )
}
