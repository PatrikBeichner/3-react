import React from 'react';

//functional component
export const Loading = () => {
    return (
        <div className="col">
            {/* fa icon, pulse makes rotate, 3x increases size, fw makes fixed width */}
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary" />
            <p>Loading...</p>
        </div>
    );
};