const setTitle = (title)  => {
    const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);
    return document.title = capitalizedTitle;
}

export default setTitle;