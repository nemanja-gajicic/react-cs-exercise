import { CalculatorRow } from "./CalculatorRow"
import "../../css/styles.scss";
import { IRowComponent } from "../App";

export const CalculatorRowsList = (props : any) => {
    const calculatorRows = props.rows.map((row: IRowComponent,index:number)=>{
        return (<CalculatorRow sign={row.sign}
                               value={row.value}
                               isDisabled={row.disabled}
                               id={index}
                               key={index} 
                               handleInputChange={props.handleInputChange} 
                               handleSelectChange={props.handleSelectChange}
                               handleDisableToggle = {props.handleDisableToggle} 
                               handleDeleteClick = {props.handleDeleteClick} 
                               />);
    });

    return (
        <div>
            {calculatorRows}
        </div>
    )
}