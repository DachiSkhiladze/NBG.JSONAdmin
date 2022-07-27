import { useDispatch } from "react-redux"

function AppSiderbar({ list }) {
    const dispatch = useDispatch()

    function onClick(item) {
        dispatch({
            type: 'SET_SCHEME',
            data: item
        })
    }

    return (
        <div className="sidebar">
            {list?.map((x, i) =>
                <button key={x.id} className={i === 0 ? "active" : ""}>
                    <span>{x.id}</span>
                </button>
            )}
        </div>
    )
}

export default AppSiderbar