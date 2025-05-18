import React from "react";
import { Box, Container, Divider } from "@mui/material";
import InterviewTable from "../../components/Admission/InterviewTable";
import StudentList from "./StudentList";
import ProfileCard from "../../components/common/ProfileCard";
// import ProfileCard from "../../components/common/ProfileCard";
// import StudentList from "../../components/admission/StudentList";
// import InterviewTable from "../../components/admission/InterviewTable";

const AdmissionDashboard = () => {
    const Data = {
        name: "Ranjeet Singh",
        role: "Teacher",
        contact: "+91 000000 00000",
        email: "rsingh45@gmail.com",
        classAdvisor: "Class Advisor",
        attendance: 90,
        leaveBalance: {
            annual: 60,
            sick: 40,
            paid: 20,
        },
    };

    const studentData = [
        {
            id: 1,
            name: "Arjuna Simms",
            date: "29/10/2023",
            status: "Active",
            image: "/diverse-student-profiles.png",
        },
        {
            id: 2,
            name: "Arjuna Simms",
            date: "29/10/2023",
            status: "On leave",
            image: "/diverse-student-profiles.png",
        },
        {
            id: 3,
            name: "Arjuna Simms",
            date: "29/10/2023",
            status: "Pass out",
            image: "/diverse-student-profiles.png",
        },
        {
            id: 4,
            name: "Arjuna Simms",
            date: "29/10/2023",
            status: "Active",
            image: "/diverse-student-profiles.png",
        },
    ];

    const interviewData = [
        { id: 1, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
        { id: 2, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
        { id: 3, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
        { id: 4, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
        { id: 5, name: "John Doe", subject: "Math", interviewDate: "Not assigned" },
    ];

    return (
        <Box sx={{ p: 0 }}>
            <Box>
                <ProfileCard data={Data} />
                <Divider />
                <StudentList students={studentData} />
                <InterviewTable interviews={interviewData} />
            </Box>
        </Box>
    );
};

export default AdmissionDashboard;