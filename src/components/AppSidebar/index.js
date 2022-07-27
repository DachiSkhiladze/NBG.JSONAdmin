function AppSiderbar({ list }) {
    return (
        <div className="sidebar">
            {list?.map((x, i) =>
                <button className={i === 0 && "active"}>
                    <span>{x.title}</span>
                </button>
            )}
        </div>
    )
}

export default AppSiderbar