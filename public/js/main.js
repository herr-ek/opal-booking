function confirmDelete(){
    // var r = confirm("Are you sure?");
    button = document.getElementById('submit_button')
    if (confirm("Are you sure you want to delete this?")){
        button.form.submit();
    }
}