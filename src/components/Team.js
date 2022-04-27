import { lazy, useEffect, useState } from "react";
import useImage from "../UseImage";
import dataJson from "../Resources/data.json";

const TeamMember = ({ memberInfo }) => {
    const { loading, error, image } = useImage(memberInfo.imagePath);
    const loadingImage = "Loading Image...Please wait...";
    return (loading && loadingImage) || (
        <div className="col-3">
            {/* {console.log(memberInfo)} */}
            {/* {console.log(image)} */}
            {image && <img className="teamImage" src={image}></img>}
            <h5>{memberInfo.name}</h5>
            <h6>{memberInfo.post}</h6>
        </div>
    );
};
const Team = () => {
    const {members} = dataJson;
    return (
        <div>
            <h2>Meet Our Team</h2>
            <div className="Row">
                <div className="team col-3">
                    {
                        members.map((member) => {
                            return (<div className="teamMember" key={member.key}>
                                <TeamMember key={member.key} memberInfo={member} />
                            </div>);
                        })
                    }
                </div>
                {/* {members.map((member)=>{return <TeamMember key={member.key} memberInfo={member}/>})} */}
            </div>
        </div>
    );
}

export default Team;