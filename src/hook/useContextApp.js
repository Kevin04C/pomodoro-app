import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const useContextApp = () => {
  return useContext(AppContext)
}
