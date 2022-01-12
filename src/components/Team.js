const TeamMember = ({memberInfo}) => {
    return (
        <div className="col-3">
            <img src={memberInfo.imagePath}></img>
            <h5>{memberInfo.name}</h5>
            <h6>{memberInfo.post}</h6>
        </div>
        );
};
const Team = () => {
    return (
        <div>
            <h4>Team</h4>
            <p>
                Hello world
            </p>
        </div>
    );
}

export default Team;