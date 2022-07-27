import { useContext } from "react"
import { blockContext } from "../config/contexts"

function useBlocks() {
    const { pushBlock, popBlock } = useContext(blockContext)
    return { pushBlock, popBlock }
}

export default useBlocks
