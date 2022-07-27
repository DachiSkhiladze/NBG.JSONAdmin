import '../App.scss';

function AppTable({ titles, data }) {

    return (
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

    );
}

export default AppTable      
