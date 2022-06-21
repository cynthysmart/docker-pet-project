
var express = require("express");
const res = require("express/lib/response");
var router = express.Router();


//logging user
router.post('/login',(req, res) => {
    function imgSlider(anything){
        document.querySelector('#pepsican').src = anything;
    }
    
    /* Cambiar color */
    function changeBgColor(color){
        const content = document.querySelector('.content');
    }
    
    function menuToggle(){
        const hamburgerMenu = document.querySelector('.hamburgerMenu');
        const menubar = document.querySelector('.menu-bar');
        hamburgerMenu.classList.toggle('active');
        menubar.classList.toggle('active');
    }
});



module.exports = router;