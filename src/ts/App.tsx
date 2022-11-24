import React from "react";
import Title from "./components/Title";
import "../css/styles.scss";
import { CalculatorRowsList } from "./components/CalculatorRowsList";

interface IProps {}

interface IState {
  version: string,
  calculatorRows: Array<IRowComponent>
}

export interface IRowComponent {
  sign: string,
  value: number,
  disabled: boolean
}

class App extends React.Component<IProps, IState>{
  constructor(props: any) {
    super(props);
    this.state = {
      version: React.version,
      calculatorRows: [
        { sign: "plus", value: 100, disabled: false },
        { sign: "plus", value: 30, disabled: false },
        { sign: "minus", value: 7, disabled: false },
      ]
    }
  }

  /**
   * Handles the click event on the "Add row" button
   */
  handleAddNewCalculatorRow = () => {
    // setting the default new component data
    const newRow: IRowComponent = { sign: "minus", value: 0, disabled: false };
    this.setState(prevState => ({
      calculatorRows: [...prevState.calculatorRows, newRow]
    }))
  }

  /**
   * Sums the values of input fields placed in the state.calculatorRows, 
   * considering also the "disabled","sign" properties in each of the objects 
   * @returns the sum of all input fields (values) in CalculatorRow components
   */
  calculateResult = (): number => {
    return (this.state.calculatorRows.reduce(
      (partialSum: number, currentRow: IRowComponent): number => {
      // this check could / should be more robust
      if (!currentRow.disabled) {
        return currentRow.sign === "minus" ? 
          partialSum - currentRow.value : 
          partialSum + currentRow.value;
      }
      return partialSum;
    }, 0)
    )
  }

  /**
   * Updates the object in the state.calculatorRows array whose input value 
   * has changed and updates the state
   * @param e - the event occuring, in this case on an <input> element
   * @param index - the index of the row's representation in the 
   * state.calculatorRows
   */
  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): 
  void => 
  {
    const updatedRows = this.state.calculatorRows.map((row, currentIndex) => {
      if (currentIndex === index) {
        // if the parsed value is NaN
        if ( !e.target.valueAsNumber ) {
          return {...row, value: 0}
        } else { 
          return { ...row, value: e.target.valueAsNumber };
        }
      }
      return row;
    })
    this.setState({ calculatorRows: updatedRows });
  }

  /** 
   * Updates the object in the state.calculatorRows array whose sign value 
   * has changed and updates the state
   * @param e - the event occuring, in this case on a <select> element
   * @param index - the index of the row's representation in the 
   * state.calculatorRows
   */
  handleSelectChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): 
  void => 
  {
    const updatedRows = this.state.calculatorRows.map((row, currentIndex) => {
      if (currentIndex === index) {
        return { ...row, sign: e.target.value };
      }
      return row;
    })
    this.setState({ calculatorRows: updatedRows });
  }

  /**
   * Inverts the value of the disabled property of the row object representation
   * inside the state.calculatorRows array and updates the state 
   * @param index - the index of the row's representation in the 
   * state.calculatorRows
   */
  handleDisableToggle = (index: number): void => {
    const updatedRows = this.state.calculatorRows.map((row, currentIndex) => {
      if (currentIndex === index) {
        return { ...row, disabled: !row.disabled };
      }
      return row;
    })
    this.setState({ calculatorRows: updatedRows });
  }

  /**
   * Handles the delete button click in each of the rows, by removing the object
   * from state.calculatorRows and updating the state 
   * @param index - corresponds to the index of the row's representation in 
   * state.calculatorRows array
   */
  handleDeleteClick = (index: number): void => {
    const copy = [...this.state.calculatorRows];
    copy.splice(index,1);
    this.setState({calculatorRows : copy});
  }

  render() {
    return (
      <div className="page-wrap">
        <button
          type="button"
          className="block"
          onClick={this.handleAddNewCalculatorRow}>
          Add row
        </button>
        <CalculatorRowsList
        // prop drilling that should be resolved
          rows={this.state.calculatorRows}
          handleInputChange={this.handleInputChange}
          handleSelectChange={this.handleSelectChange}
          handleDisableToggle={this.handleDisableToggle}
          handleDeleteClick={this.handleDeleteClick}
        />
        <p>Result: {this.calculateResult()}</p>
        <Title>React version: {this.state.version}</Title>
      </div>
    )
  }

}

export default App;