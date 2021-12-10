function Alert(props) {
    return <div className={"backdrop"}>
        <div className="modal">
            {props.children}
            <div className="alertButtonGroup">
                <button className={"cancel"} type={"button"}
                        onClick={props.onClose}>
                    Cancel
                </button>
                <button className={"warningConfirm"} type={"button"}
                        onClick={() => {
                            props.onClose();
                            props.onOK();
                        }}>
                    Yes, delete selected lists
                </button>
            </div>
        </div>
    </div>
}

export default Alert