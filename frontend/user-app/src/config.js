// const apiUrl = 'https://restful-api-js.herokuapp.com'
const apiUrl = 'http://localhost:3001'


function objectToForm(object) {
    var form_data = new FormData();
    for (var key in object) {
        form_data.append(key, object[key]);
    }
    return form_data
}



export {objectToForm, apiUrl};