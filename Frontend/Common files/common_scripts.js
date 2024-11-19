//Very basic generic search bar to navigate through every major page

function searchFor(){
    let x = document.getElementById("search").value.toLowerCase();
    
    if (x.includes("acc") || x.includes("log"))
        window.location.href = "../Login page/SignIn.html";
    else if (x.includes("create"))
        window.location.href = "../Create account page/Account.html";
    else if(x.includes("ser"))
        window.location.href = "../Services/services.html";
    else if(x.includes("pric")||x.includes("cost"))
        window.location.href = "../Pricing/Pricing.html";
    else if(x.includes("compan"))
        window.location.href = "../Home page/Index.html#about-us";
    else if(x.includes("forgot") && x.includes("passw"))
        window.location.href = "../Login page/password.html";
    else if ((x.includes("add")||x.includes("reque")) && x.includes("service"))
        window.location.href = "../Service Request/servicereq.html";
    else
        alert("Nothing was found.");

        return false;
}

//In development do not modify
//Try to implement a function that saves the login status of the user

//If the user logs in, save a key in localStorage
//Then display the correct navbar and dashboard based on the key

//Sign out and redirect to login page

function signOut(){
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("state");
    alert("Signed out successfully");
    window.location.href = "../Home page/Index.html";
}
function signOut2(){
    localStorage.setItem("loggedIn", false);
    localStorage.removeItem("state");
    alert("Signed out successfully");
    window.location.href = "../../Home page/Index.html";
}

//Redirect to the correct dashboard based on the user's role
if (localStorage.getItem("state") === "manager") {
    document.getElementById("dashboard-link").href = "../Manager dashboard/manager.html";
}

//Log out the user if inactive after 15 minutes of inactivity
let inactivityTime = 0; 
const maxInactivityTime = 15; 


const inactivityCheck = setInterval(() => {
  inactivityTime++;
  if (inactivityTime >= maxInactivityTime) {
    alert("You have been logged out due to inactivity");
    clearInterval(inactivityCheck); 
    localStorage.setItem("loggedIn", false);
    window.location.href = "/Home page/Index.html"; //Absolute path to redirect to the home page
  }
}, 60000); 

function resetInactivity() {
  inactivityTime = 0;
}

//Event listeners to reset inactivity time
window.addEventListener("mousemove", resetInactivity);
window.addEventListener("keydown", resetInactivity);
window.addEventListener("scroll", resetInactivity);
window.addEventListener("click", resetInactivity);

//Adjust navbar based on login status
if (localStorage.getItem("loggedIn") == "true") {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("signUp").classList.add("hidden");
    document.getElementById("signOut").classList.remove("hidden");
    document.getElementById("dashboard").classList.remove("hidden");
} else {
    document.getElementById("login").classList.remove("hidden");
    document.getElementById("signUp").classList.remove("hidden");
    document.getElementById("signOut").classList.add("hidden");
    document.getElementById("dashboard").classList.add("hidden");
}
