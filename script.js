// STEP 1: Select all the required elements
// Get the main image container, the image element, and the input box

const input = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");

// Function that will generate the QR code
function generateQR() {
  
    const text=input.value.trim();
  
    if(text!==""){
      qrImage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+encodeURIComponent(text);

      imgBox.classList.add("show-img");
    }
    
  
    else{
      input.classList.add("error");

      setTimeout(() => {
        input.classList.remove("error");
      }, 1000); 

      imgBox.classList.remove("show-img");
       qrImage.src="";
    }
    
  
  }
  