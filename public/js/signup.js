console.log("Signup frontend javascript file");

$(function () {
    const fileTarget = $(".file-box .upload-hidden");
    let filename;

    fileTarget.on("change", function (){
        if(window.FileReader) {
            const uploadFile = $(this) [0].files[0];
            console.log("uploadFile:", uploadFile);
            const fileType = uoloadFile("type");
            const validImageType = ["image/jpg", "image/jpeg","image/png"];
            if(validImageType.includes(fileType)) {
                alert("Plaese insert only jpeg, jpg, png!")

            } else {
                if(uploadFile) {
                    console.log(URL.createObjectURL(uploadFile));
                    $(".upload-img-frame").attr("src",URL.createObjectURL(uploadFile)).addClass("success");
                }
                filename = $(this) [0].files[0].name
            }
            $(this).siblings(".upload-name").val(filename);
        }
    });
    // $(".member-nick").click(function () {
    //     $(".member-phone").toggle();
    // });
});

function validateSignupForm() {
    const memberNick = $(".member-nick").val();
    const memberPhone = $(".member-phone").val();
    const memberPassword = $(".member-password").val();
    const confirmPassword = $(".confirm-password").val();

    if (
        memberNick       === "" ||
        memberPhone      === "" ||
        memberPassword   === "" ||
        confirmPassword  === "" 
     ) {
        alert("Please insert all required inputs!");
        return false;
    }

    if(memberPassword !== confirmPassword) {
        alert("Password differs, please check!")
        return false;
    }

    const memnerImage = $(".member-image").get(0).files[0] ? $(".member-image").get(0).files[0].name :null;

    if(!memnerImage) {
        alert("Please insert restaurant image!");
        return false;
    }
    
}
