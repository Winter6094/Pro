function openTab(tabName) {
        var i;
        var tabContent = document.getElementsByClassName("tabContent");
        for (i = 0; i < tabContent.length; i++) {
            tabContent[i].style.display = "none";
        }
        document.getElementById(tabName).style.display = "block";
    }
    function myf() {
        alert ("Ця сторінка, на жаль, поки що не доступна.");
    }