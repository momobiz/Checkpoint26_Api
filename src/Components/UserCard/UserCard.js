import React from 'react';


const UserCard = ({user}) => {

    let tabCl=['bg-success', 'bg-danger','bg-secondary','bg-warning', 'bg-info'];
    var choixCl = tabCl[Math.floor(Math.random()*tabCl.length)];
  
    return (
        <div>
            <div className={`card text-white ${choixCl} mb-3 d-inline-block`} style={{width: "20rem"}}>
            <div className="card-header">{user.name} </div>
            <div className="card-body">
                <h4 className="card-title">{user.phone}</h4>
                <p className="card-text">{user.website} </p>
            </div>
            </div>
            
        </div>
    );
}

export default UserCard;
