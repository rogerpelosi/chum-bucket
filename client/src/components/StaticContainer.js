import { Link, useHistory } from 'react-router-dom';

// this is intended to be a static div that holds a chum list or current user data, will be approx the same size as login and sign up divs as well

function StaticContainer({ data, dataType }) {

    let history = useHistory();

    if (dataType === 'user' || dataType === 'edituser') {
        return (
            <div className="static">

                <div className='pp' style={{backgroundColor: data.pp ?
                                                             data.pp :
                                                             '#FFFF00'}}>xd</div>

                <div className="userData">
                    <h2>name: {`${data.name}`.toLowerCase()}</h2>
                    <h2>username: {`${data.username}`.toLowerCase()}</h2>
                    <h2>email: {`${data.email}`.toLowerCase()}</h2>
                    <h3>bio: "{`${data.bio}`.toLowerCase()}"</h3>
                </div>

                {
                    dataType === 'edituser'? 
                    null :
                    (<button onClick={() => history.push('/me/edit')}>
                        edit
                    </button>)
                }

            </div>
        );
    } else if (dataType === 'chums') {
        return (
            <div className="static">

                <div className="chumData">

                    <h1>your chums</h1>
                    
                    {data.map(chum => 
                        <div className="chum" key={chum.username}>
                            <Link to={`/users/${chum.id}`}>
                                <h3>{`${chum.username}`.toLowerCase()}</h3>
                            </Link>
                            <h3>{`${chum.name}`.toLowerCase()}</h3>
                            <button>remove</button>
                        </div>)}

                </div>

            </div>
        );
    }

}

export default StaticContainer;