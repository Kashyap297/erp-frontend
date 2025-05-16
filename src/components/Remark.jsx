import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Paper,
    Grid,
    Container,
    InputLabel,
    Select,
    MenuItem,
    FormControl
} from '@mui/material';

export default function RemarkForm() {
    const [formData, setFormData] = useState({
        name: '',
        date: '',
        class: '',
        section: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <Container maxWidth="lg" className="py-8">
            <Paper elevation={0} className="p-6">
                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={3}>

                        {/* Class and Section fields in second row */}
                        <Grid size={4} >
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Class</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formData.class}
                                label="Class"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid size={4} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Section</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formData.section}
                                label="Section"
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            </FormControl>
                        </Grid>

                        <Grid size={8}>
                            <Typography variant="body1" className="mb-2">Name</Typography>
                            <TextField
                                fullWidth
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                variant="outlined"
                                size="small"
                            />
                        </Grid>

                        {/* Description field */}
                        <Grid size={8}>
                            <Typography variant="body1" className="mb-2">Description</Typography>
                            <TextField
                                fullWidth
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                variant="outlined"
                                multiline
                                rows={5}
                            />
                        </Grid>

                        {/* Submit button */}
                        <Grid size={8}>
                            <Button
                                type="submit"
                                variant="contained"
                                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Container>
    );
}