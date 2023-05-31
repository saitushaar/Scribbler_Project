//  For edit button to change to save

var editMode = false;
function postEdit() {
    const paragraph = document.getElementById("paraText");
    const title = document.getElementById("titletext");
    var edit_button = document.getElementById("edit");

    if (editMode == false) {

        title.contentEditable = true;
        paragraph.contentEditable = true;


        edit_button.innerHTML = "Save " + `<i class="fa fa-save"></i>`;
        editMode = true;
        title.style.outline='1px solid red';
        paragraph.style.outline = '1px solid red';


    } else {

        title.contentEditable = false;
        paragraph.contentEditable = false;
        edit_button.innerHTML = "Edit " + `<i class="fa fa-edit"></i>`;
        editMode = false;
        title.style.outline='none';
        paragraph.style.outline = 'none';
    }

}