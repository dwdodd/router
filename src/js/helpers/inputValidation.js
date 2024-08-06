const inputValidation = (tag, msg) => {
    MyElement(tag).innerHTML = msg;
    setTimeout(() => MyElement(tag).innerHTML = '', 3000);
}

export default inputValidation;