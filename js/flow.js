
function checkInput(id) {
    var data = document.getElementById(id).value;
    var pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (pattern.test(data) == true) {
        document.getElementById(id).style = "border-color:grey;";
        document.getElementById('myForm').submit();
        document.getElementById("err" + id).innerHTML = "";

        $('#myForm').on('submit', function(e){
            $('#successModal').modal('show');
            e.preventDefault();
        });
    
    



        //  $(window).(function(){
        //      $('#successModal').modal('show');
        //  });


        // const myModal = document.getElementById('successModal')
        // const myInput = document.getElementById('form-button')

        // myModal.addEventListener('shown.bs.modal', () => {
        //     myInput.focus()
        // })





    } else {
        document.getElementById(id).style = "border-color:red;";
        document.getElementById('form-button').type = "button";
        document.getElementById("err" + id).innerHTML = "لطفا طبق الگوریتم ایمیل بنویسید.";


    }





}


