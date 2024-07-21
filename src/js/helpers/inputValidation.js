const inputValidation = (tag, msg) => {
    document.getElementById(tag).innerHTML = msg;
    setTimeout(() => document.getElementById(tag).innerHTML = '', 3000);
}

export default inputValidation;