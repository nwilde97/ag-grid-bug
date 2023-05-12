import {AgGridReact} from "ag-grid-react";
import {useAtomValue} from "jotai/index";
import {stateOne, stateTwo} from "./state";

export const Grid = () => {
    const two = useAtomValue(stateTwo);
    const one = useAtomValue(stateOne);
    console.log(one, two);
    return <div>
        <div className="ag-theme-alpine" style={{ width: '200px', height: '200px' }}>
            <AgGridReact
                columnDefs={[{field: "testing"}]}
                rowData={[]}
                overlayNoRowsTemplate={"Nothing"}
                domLayout={"autoHeight"}
            />
        </div>
    </div>
}
