import React from 'react';
import InputField from '../InputField/InputField';


// table data and  will take in the input from InputField
// the checkerboard will resize with the data from InputField
// not sure if this component is neccessary ??

class TableData extends React.Component {
    render() {
        return (
            <div>
                <td
                    className="used"

                >
                    <tr
                        className="used"
                    >
                    </tr>
                </td>
            </div >
        )
    }
}

export default TableData;