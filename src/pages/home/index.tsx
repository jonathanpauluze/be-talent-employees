import { useState } from 'react'
import { DefaultLayout } from '@/layouts/default-layout'
import { Typography } from '@/ds/typography'
import { Search } from '@/ds/search'
import { useEmployees } from '@/domains/employees/hooks/use-employees'
import styles from './home.module.scss'
import { EmployeesTable } from '@/domains/employees/components/employees-table'
import { Spinner } from '@/components/shared/spinner'

function Home() {
  const [search, setSearch] = useState('')
  const { loading, data } = useEmployees(search)

  return (
    <DefaultLayout>
      <div className={styles.titleWrapper}>
        <Typography as="h1">Funcionários</Typography>

        <div className={styles.searchWrapper}>
          <Search
            fullWidth
            value={search}
            onChange={setSearch}
            debounceTime={500}
          />
        </div>
      </div>

      {loading ? <Spinner /> : <EmployeesTable data={data} />}
    </DefaultLayout>
  )
}

export default Home
