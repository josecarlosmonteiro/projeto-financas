import { getCurrentDate } from "../utils/date"

const { month, year } = getCurrentDate();

export const URL = {
  HOME: '/',
  MONTHLY_PLANNING: `/planejamento-mensal/${month}/${year}`,
}