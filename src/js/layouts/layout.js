import header from "./header.js";
import section from "./section.js";
import footer from "./footer.js";

//const layout = (content) => header + section(content) + footer;
const layout = (content) => section(content);
export default layout;