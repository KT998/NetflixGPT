export const validateFields = (name, email, password, imageUrl) => {
    let isValidName = true;
    let isValidEmail = true;
    let isValidPassword = true;
    let isValidImageUrl = true;
    const errorMessages = [];
    if (name !== undefined) {
        isValidName = /^[a-zA-Z ]+$/.test(name);
    }
    if (email !== undefined) {
        isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    if (password !== undefined) {
        isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/.test(password);
    }
    if (imageUrl !== undefined) {
        isValidImageUrl = !(imageUrl.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i) === null);
    }
    if (!isValidName) errorMessages.push("Please enter a valid name (only letters and spaces allowed).");
    if (!isValidEmail) errorMessages.push("Please enter a valid email address.");
    if (!isValidPassword) errorMessages.push("Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.");
    if (!isValidImageUrl) errorMessages.push('URL does not appear to be an image. URl supports format jpg, jpeg, png, gif, webp and svg.');
    if (isValidName && isValidEmail && isValidPassword && isValidImageUrl) return null;
    return errorMessages;

}