import Button from "react-bootstrap/Button"

const ProfileScreen = () => {
    const NAME = "Tester Testington"
    return (
        <>
            <h3>{NAME}</h3>

            <Button variant="primary">Log out</Button>
        </>
    )
}

export default ProfileScreen