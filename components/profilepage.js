export default function Profilepage({id,firstName,lastName, email, phoneNumber}){
    return(
        <>  
            <h1>Profile</h1>

            <div id={id}>
                <h4>Firstname: {firstName}</h4>
                <h4>Lastname: {lastName}</h4>
                <h4>Phonenumber: {phoneNumber}</h4>
                <h4>Email: {email}</h4>
            </div>
        </>
    )
}