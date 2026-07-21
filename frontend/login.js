async function login(){

    const username =
    document.getElementById("username").value;


    const password =
    document.getElementById("password").value;



    const response = await fetch(
        "http://localhost:5000/api/users/login",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({
                username,
                password
            })
        }
    );


    const data = await response.json();


    if(response.ok){

        alert("تم تسجيل الدخول بنجاح");

        localStorage.setItem(
            "user",
            JSON.stringify(data.user)
        );

        window.location.href =
        "dashboard.html";

    }else{

        alert(data.message);

    }

}
