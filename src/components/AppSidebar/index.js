import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";




function AppSiderbar({ list }) {

    const dispatch = useDispatch();
    const selector = useSelector(o => o.scheme);
    console.log(selector);
    const handleClick = (e, id) => {
        console.log('this is:', id);
        dispatch({type: 'SET_SCHEME', data: id});
      };
    
    return (
        <div className="sidebar">
            {list?.map((data, i) =>
                <button onClick={(e) => handleClick(e, data)} key={data.id} className={data.id === selector.id ? "active" : ""}>
                    <span>{data.id}</span>
                </button>
            )}
        </div>
    )
}

export default AppSiderbar