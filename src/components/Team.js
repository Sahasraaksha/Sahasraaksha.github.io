import { lazy, useEffect, useState } from "react";
import useImage from "../UseImage";


const members = [
    {
        "imagePath": "./Resources/image.jpg",
        "name": "Nachiappan S K",
        "post": "Co-Founder",
        "key": 1
    },

    {
        "imagePath": "./Resources/image.jpg",
        "name": "Parithimalan A",
        "post": "Co-Founder",
        "key": 2
    },

    {
        "imagePath": "./Resources/image.jpg",
        "name": "Sriram G",
        "post": "Co-Founder",
        "key": 3
    },

    {
        "imagePath": "./Resources/image.jpg",
        "name": "Vikram Adithya C P",
        "post": "Co-Founder",
        "key": 4
    }
]

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