

function SignupForm () {

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: login action
        alert('submitted')
    }

    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <label>Email</label>
                <input placeholder='E.g. my-email@constance.com'></input>
                <label>First Name</label>
                <input></input>
                <label>Last Name</label>
                <input></input>
                <label>Address 1</label>
                <input></input>
                <label>Address 2</label>
                <input placeholder='E.g. Unit # 101'></input>
                <label>City</label>
                <input></input>
                <label>Postal Code</label>
                <input></input>
                <label>Country</label>
                <input></input>
                <input type="submit" className="button" value="Submit"/>
            </form>
        </div>
    )
}

export default SignupForm;