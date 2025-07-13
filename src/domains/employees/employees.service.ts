import { api } from '@/lib/api'
import type { Employee } from '.'

export class EmployeesService {
  static async getAll(name?: string): Promise<Employee[]> {
    const query = name ? `?name_like=${encodeURIComponent(name)}` : ''
    return api.get(`/employees${query}`)
  }
}
