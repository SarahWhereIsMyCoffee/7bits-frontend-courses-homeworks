'use strict';


let url = window.location.href;
url = url.replace('?', '&');
let searchParams = new URLSearchParams(url);

let textFieldsMap = {
    "firstName" : "first-name",
    "lastName"  : "last-name",
    "email"     : "email"
};


Object.keys(textFieldsMap).forEach(key => {
   let currentTextField = searchParams.get(key);

   if (currentTextField !== null) {
       document.getElementById(textFieldsMap[key]).value = currentTextField;
   }
});

if (searchParams.has("gender")) {
    let gender = searchParams.get("gender");

    if (gender !== null) {
        let fieldID = (gender === "female") ?
            document.getElementById("gender-female") : document.getElementById("gender-male");
        fieldID.checked = "checked";

        /*let operationExecutor = new OperationExecutor();
        operationExecutor.execute(gender);
        */
    }
}

/**
 * Classes and modules are not supported by browsers without, for example, WebPack
 */
/*
class OperationExecutor {
    constructor() {
        this.state = {
            male: this.checkForMale.bind(this),
            female: this.checkForFemale.bind(this),
        };
    }

    execute(actionType) {
        return this.state[actionType]();
    }

    checkForMale() {
        document.getElementById("gender-male").checked = "checked";
    }

    checkForFemale() {
        document.getElementById("gender-female").checked = "checked";
    }
}
*/