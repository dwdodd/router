const verifyAge = (tag) => {
    document.getElementById(tag).addEventListener('change', function() {
        const inputDate = new Date(this.value);
        const today = new Date();
        const age = today.getFullYear() - inputDate.getFullYear();
        const monthDifference = today.getMonth() - inputDate.getMonth();
        const dayDifference = today.getDate() - inputDate.getDate();
        let isValidAge = age > 18 || (age === 18 && (monthDifference > 0 || (monthDifference === 0 && dayDifference >= 0)));

        if (!isValidAge) {
            document.getElementById('error-message-date').style.display = 'block';
            this.value = '';
        } else {
            document.getElementById('error-message-date').style.display = 'none';
        }
    });
};

export default verifyAge;