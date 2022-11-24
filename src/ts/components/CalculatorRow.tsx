export const CalculatorRow = (props: any) => {

    return (
        <div>
            <select
                value={props.sign}
                disabled={props.isDisabled}
                onChange={e => props.handleSelectChange(e, props.id)}>
                <option value="minus">-</option>
                <option value="plus">+</option>
            </select>
            <input type="number"
                value={props.value}
                disabled={props.isDisabled}
                onChange={e => props.handleInputChange(e, props.id)}
            />
            <button type="button"
                disabled={props.isDisabled}
                onClick={() => props.handleDeleteClick(props.id)}>
                Delete
            </button>
            <button type="button"
                onClick={() => props.handleDisableToggle(props.id)}>
                {props.isDisabled ? "Enable" : "Disable"}
            </button>
        </div>
    )
}
