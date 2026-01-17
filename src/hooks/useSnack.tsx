import { AppContext } from "@/context/AppContext"
import { useContext } from "react"

export const useSnack = () => {
    const context = useContext(AppContext);
    if(!context) throw new Error("Error while fetching data");
    return context;
}