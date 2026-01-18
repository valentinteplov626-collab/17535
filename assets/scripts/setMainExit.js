import {
    makeExit
} from "./shared-HVIKRAJP.js";
import {
    parseConfig
} from "./shared-JTAB4EAH.js";
import "./shared-MD6W23H5.js";
var config = parseConfig(APP_CONFIG);
if (config) {
    document.addEventListener("click", () => {
        makeExit(config, "mainExit");
    });
}