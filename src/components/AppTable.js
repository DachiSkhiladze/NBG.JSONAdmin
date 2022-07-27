import '../App.scss';
import useController from './AppEditor/hooks/useController';
import rootScheme from '../scheme.json'

function count(params) {
    const { state, id } = params

    return state[id].length
}

function selector(params) {
    const { state, scheme, selector, id } = params

    return scheme.constants[selector][state[id]]
}

function text(params) {
    return params.state[params.id]['En']
}

const functions = {
    'count': count,
    'selector': selector,
    'text': text
}

function AppTable({ onAdd, scheme, path, onSave, state }) {


    const data = state.map((x, i) => scheme.table.map(y =>
        y.function ?
            functions[y.function]({
                state: state[i],
                scheme: rootScheme,
                ...y
            })
            : x[y.id]))

    const titles = scheme.table.map(x => x.label)

    function onAddClick() {
        onAdd({
            scheme: {
                ...scheme,
                type: 'form',
            },
            onSave: (x) => {
                onSave(scheme.id, [...state, x])
            },
            path: path
        })
    }

    return (
        <div className='table-cont'>
            <button onClick={onAddClick}>Add</button>
            <table>
                <tr>
                    <th></th>
                    {
                        titles.map((title) => <th>{title}</th>)
                    }
                </tr>
                {
                    data.map((user, i) =>
                        <tr>
                            <td>{i + 1}</td>
                            {
                                user.map((detail) =>
                                    <td>{detail}</td>
                                )
                            }
                        </tr>
                    )
                }
            </table>
        </div>
    );
}

export default AppTable      
