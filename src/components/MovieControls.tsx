import React from 'react'

export const MovieControls: React.FC = () => {
    return (
        <div className="card-controls text-gray-300">
            <div className="inner-controls">
                <button className="btn-ctrl">
                    <i className="fa-fw fa fa-heart"></i>
                </button>
                <button className="btn-ctrl">
                    <i className="fa-fw fa fa-list"></i>
                </button>                
            </div>
        </div>
    )
}
