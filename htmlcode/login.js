function validate()
{
var emailid = document.getElementById('emailid')
var password = document.getElementById('password')
//Form.addEventlistener('login',function(e)
//{
//  e.prevebtdefault();
    if(emailid.value==" "&& password.value==" ")
    {
        alert("login succesfully");
        return false;
    } else {
    alert("login failed");
 }
}