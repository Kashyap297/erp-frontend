export const roles = {
    teacher: 'teacher',
    principal: 'principal',
    finance: 'finance',
    coordinator: 'coordinator',
    admission: 'admission',
};

// Simulate logged-in user
export const getCurrentUserRole = () => {
    return 'teacher'; // Replace with actual role logic (e.g., from auth context)
};
