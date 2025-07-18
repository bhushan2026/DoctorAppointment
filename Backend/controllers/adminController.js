


// API for adding doctor
const addDoctor = async (req, res) => {
    try {
        const { name, email, password, speciality, degree, experience, about,  fee, address } = req.body;

        const imageFile = req.file    
        
        console.log({ name, email, password, speciality, degree, experience, about,  fee, address } , imageFile);
        
        
        

        res.status(201).json({ message: "Doctor added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error adding doctor" });
    }
};

export default addDoctor;