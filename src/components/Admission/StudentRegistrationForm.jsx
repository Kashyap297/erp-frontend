"use client"

import { useState } from "react"
import { Box, Button, Typography, TextField, Select, MenuItem, FormControl } from "@mui/material"
import FileUploadIcon from "@mui/icons-material/FileUpload"
import FileDownloadIcon from "@mui/icons-material/FileDownload"
import CalendarTodayIcon from "@mui/icons-material/CalendarToday"

const StudentRegistrationForm = () => {
    const [profileImage, setProfileImage] = useState(null)
    const [formData, setFormData] = useState({
        name: "",
        dob: "",
        gender: "",
        nationality: "",
        category: "",
        fatherName: "",
        contactNumber: "",
        motherName: "",
        alternateContactNumber: "",
        address: "",
        state: "",
        district: "",
        pinCode: "",
        result: null,
        cc: null,
        tc: null,
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleFileChange = (e, field) => {
        if (field === "profileImage") {
            setProfileImage(e.target.files[0])
        } else {
            setFormData({
                ...formData,
                [field]: e.target.files[0],
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        console.log("Profile Image:", profileImage)
    }

    return (
        <Box sx={{ maxWidth: 1400, margin: "0 auto", padding: 4 }}>
            <form onSubmit={handleSubmit}>
                {/* Profile Image Upload */}
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
                    <Box
                        sx={{
                            width: 100,
                            height: 100,
                            borderRadius: "50%",
                            border: "1px solid black",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            mb: 2,
                        }}
                    >
                        {profileImage ? (
                            <img
                                src={URL.createObjectURL(profileImage) || "/placeholder.svg"}
                                alt="Profile"
                                style={{ width: "100%", height: "100%", borderRadius: "50%", objectFit: "cover" }}
                            />
                        ) : null}
                    </Box>
                    <Button
                        variant="contained"
                        component="label"
                        startIcon={<FileUploadIcon />}
                        sx={{
                            bgcolor: "#0095ff",
                            "&:hover": { bgcolor: "#0077cc" },
                            textTransform: "none",
                            borderRadius: "10px",
                            px: 2,
                        }}
                    >
                        Upload Image
                        <input type="file" hidden accept="image/*" onChange={(e) => handleFileChange(e, "profileImage")} />
                    </Button>
                </Box>

                {/* PERSONAL DETAIL Section */}
                <Box sx={{ mb: 3 }}>
                    <Typography
                        sx={{
                            bgcolor: "#0095ff",
                            color: "white",
                            p: 1,
                            fontWeight: "bold",
                            borderRadius: "10px",
                            mb: 2,
                        }}
                    >
                        PERSONAL DETAIL
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Name</Typography>
                            <TextField
                                fullWidth
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>DOB</Typography>
                            <TextField
                                fullWidth
                                name="dob"
                                placeholder="Select DOB"
                                value={formData.dob}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                InputProps={{
                                    endAdornment: <CalendarTodayIcon sx={{ color: "gray" }} />,
                                }}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Gender</Typography>
                            <FormControl fullWidth size="small">
                                <Select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleInputChange}
                                    displayEmpty
                                    sx={{
                                        borderRadius: "10px",
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Select Gender
                                    </MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Nationality</Typography>
                            <FormControl fullWidth size="small">
                                <Select
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleInputChange}
                                    displayEmpty
                                    sx={{
                                        borderRadius: "10px",
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Select Nationality
                                    </MenuItem>
                                    <MenuItem value="indian">Indian</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>

                        <Box sx={{ width: "49%" }}>
                            <Typography sx={{ mb: 0.5 }}>Category</Typography>
                            <FormControl fullWidth size="small">
                                <Select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    displayEmpty
                                    sx={{
                                        borderRadius: "8px",
                                        height: "48px",
                                    }}
                                >
                                    <MenuItem value="" disabled>
                                        Select Category
                                    </MenuItem>
                                    <MenuItem value="general">General</MenuItem>
                                    <MenuItem value="obc">OBC</MenuItem>
                                    <MenuItem value="sc">SC</MenuItem>
                                    <MenuItem value="st">ST</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>
                </Box>

                {/* FAMILY DETAIL Section */}
                <Box sx={{ mb: 3 }}>
                    <Typography
                        sx={{
                            bgcolor: "#0095ff",
                            color: "white",
                            p: 1,
                            fontWeight: "bold",
                            borderRadius: "10px",
                            mb: 2,
                        }}
                    >
                        FAMILY DETAIL
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Father Name</Typography>
                            <TextField
                                fullWidth
                                name="fatherName"
                                placeholder="Father Name"
                                value={formData.fatherName}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Contact number</Typography>
                            <TextField
                                fullWidth
                                name="contactNumber"
                                placeholder="Contact number"
                                value={formData.contactNumber}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Mother Name</Typography>
                            <TextField
                                fullWidth
                                name="motherName"
                                placeholder="Mother Name"
                                value={formData.motherName}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Alternate Contact number</Typography>
                            <TextField
                                fullWidth
                                name="alternateContactNumber"
                                placeholder="Alternate Contact number"
                                value={formData.alternateContactNumber}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* ADDRESS Section */}
                <Box sx={{ mb: 3 }}>
                    <Typography
                        sx={{
                            bgcolor: "#0095ff",
                            color: "white",
                            p: 1,
                            fontWeight: "bold",
                            borderRadius: "10px",
                            mb: 2,
                        }}
                    >
                        ADDRESS
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Address</Typography>
                            <TextField
                                fullWidth
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>State</Typography>
                            <TextField
                                fullWidth
                                name="state"
                                placeholder="State"
                                value={formData.state}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>District</Typography>
                            <TextField
                                fullWidth
                                name="district"
                                placeholder="District"
                                value={formData.district}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Pin code</Typography>
                            <TextField
                                fullWidth
                                name="pinCode"
                                placeholder="Pin code"
                                value={formData.pinCode}
                                onChange={handleInputChange}
                                variant="outlined"
                                size="small"
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                    },
                                }}
                            />
                        </Box>
                    </Box>
                </Box>

                {/* UPLOAD DATA Section - Updated to match the image */}
                <Box sx={{ mb: 3 }}>
                    <Typography
                        sx={{
                            bgcolor: "#0095ff",
                            color: "white",
                            p: 1,
                            fontWeight: "bold",
                            borderRadius: "10px",
                            mb: 2,
                        }}
                    >
                        UPLOAD DATA
                    </Typography>

                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                        {/* Upload Result */}
                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Upload Result</Typography>
                            <TextField
                                fullWidth
                                name="result"
                                placeholder="Upload result"
                                value={formData.result ? formData.result.name : ""}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <FileDownloadIcon sx={{ color: "gray" }} />,
                                }}
                                variant="outlined"
                                size="small"
                                onClick={() => document.getElementById("result-upload").click()}
                                sx={{
                                    cursor: "pointer",
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                        height: "48px",
                                    },
                                }}
                            />
                            <input id="result-upload" type="file" hidden onChange={(e) => handleFileChange(e, "result")} />
                        </Box>

                        {/* Upload CC */}
                        <Box sx={{ flex: "1 1 45%", minWidth: "250px" }}>
                            <Typography sx={{ mb: 0.5 }}>Upload CC</Typography>
                            <TextField
                                fullWidth
                                name="cc"
                                placeholder="Upload CC"
                                value={formData.cc ? formData.cc.name : ""}
                                InputProps={{
                                    readOnly: true,
                                    endAdornment: <FileDownloadIcon sx={{ color: "gray" }} />,
                                }}
                                variant="outlined"
                                size="small"
                                onClick={() => document.getElementById("cc-upload").click()}
                                sx={{
                                    cursor: "pointer",
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "10px",
                                        height: "48px",
                                    },
                                }}
                            />
                            <input id="cc-upload" type="file" hidden onChange={(e) => handleFileChange(e, "cc")} />
                        </Box>
                    </Box>

                    {/* Upload TC - On a new row */}
                    <Box sx={{ mt: 3, maxWidth: "49%" }}>
                        <Typography sx={{ mb: 0.5 }}>Upload TC</Typography>
                        <TextField
                            fullWidth
                            name="tc"
                            placeholder="Upload TC"
                            value={formData.tc ? formData.tc.name : ""}
                            InputProps={{
                                readOnly: true,
                                endAdornment: <FileDownloadIcon sx={{ color: "gray" }} />,
                            }}
                            variant="outlined"
                            size="small"
                            onClick={() => document.getElementById("tc-upload").click()}
                            sx={{
                                cursor: "pointer",
                                "& .MuiOutlinedInput-root": {
                                    borderRadius: "10px",
                                    height: "48px",
                                },
                            }}
                        />
                        <input id="tc-upload" type="file" hidden onChange={(e) => handleFileChange(e, "tc")} />
                    </Box>
                </Box>

                {/* Submit Button */}
                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            bgcolor: "#0095ff",
                            "&:hover": { bgcolor: "#0077cc" },
                            px: 4,
                            py: 1,
                            borderRadius: "10px",
                            width: "150px",
                        }}
                    >
                        Submit
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default StudentRegistrationForm
