import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Xtreme Clean`
    },[title])
}
export default useTitle