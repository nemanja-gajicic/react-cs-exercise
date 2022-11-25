export const CalculatorRow = (props: any) => {
    return (
        <div className={props.isDisabled ? "fitWidth disabled" : "fitWidth"}>
            <select
                className="lrMargin"
                value={props.sign}
                disabled={props.isDisabled}
                onChange={e => props.handleSelectChange(e, props.id)}>
                <option value="minus">-</option>
                <option value="plus">+</option>
            </select>
            <input type="number"
                className="lrMargin"
                value={props.value}
                disabled={props.isDisabled}
                onChange={e => props.handleInputChange(e, props.id)}
                min="0"
                tabIndex={props.id + 1}
            />
            <button type="button"
                className="lrMargin"
                disabled={props.isDisabled}
                onClick={() => props.handleDeleteClick(props.id)}>
                Delete
            </button>
            <button type="button"
                className="lrMargin"
                onClick={() => props.handleDisableToggle(props.id)}>
                {props.isDisabled ? "Enable" : "Disable"}
            </button>
        </div>
    )
}
