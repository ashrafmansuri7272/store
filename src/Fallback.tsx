
import React from "react";

const Fallback: React.FC = ({error, resetErrorBoundary }) => {

    return <div role="alert">
        {error.message}
        <button onClick={resetErrorBoundary }>try again</button>
    </div>
}

export default Fallback