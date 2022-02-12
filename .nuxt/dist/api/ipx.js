import { createIPX, createIPXMiddleware } from "ipx";
const ipx = createIPX({"dir":"/Users/junueno/Documents/dev/private/nuxt-portfolio/static","domains":[],"sharp":{},"alias":{}});
export default createIPXMiddleware(ipx);
