//Universal toogle function for displaying and hiding elements
//---Does not work
export function toggle(elementId) {
    console.log('here');
    let item = document.getElementById(elementId);
    if (item.style.display === "block") {
    item.style.display = "none";
    } else { 
    item.style.display = "block";
    }
}