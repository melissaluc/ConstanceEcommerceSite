function UserPage({userData}){
    return(
        <div>
            <h1>Hello {userData.first_name}</h1>
            <div>
                In the future you will be able to see data on your purchase activities!
            </div>
        </div>
    )
}

export default UserPage;