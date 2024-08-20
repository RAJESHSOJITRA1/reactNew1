/* eslint-disable react/prop-types */
function Alerts(props) {
    return (
        <>
            <div className="height" style={{height:'50px'}}>
            <div className={`alert alert-${props.alert.type}  alert-dismissible fade show`} role="alert">

            <strong>  {props.alert.message}  </strong>
            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div > 
        </div>
        </>
  )
}

export default Alerts;