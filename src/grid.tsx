import {AgGridReact} from "ag-grid-react";
import {useAtomValue} from "jotai/index";
import {state} from "./state";

export const Grid = () => {
    const jotaiState = useAtomValue(state);
    console.log(jotaiState);
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
