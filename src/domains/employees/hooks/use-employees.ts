import { useEffect, useState } from 'react'
import { EmployeesService, type Employee } from '..'

export function useEmployees(name?: string) {
  const [data, setData] = useState<Employee[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setLoading(true)
    setError(null)

    EmployeesService.getAll(name)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [name])

  return { data, loading, error }
}
