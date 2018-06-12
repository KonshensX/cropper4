// import styles from 'cropperjs/dist/cropper.min.css'
console.log(require('cropperjs/dist/cropper.css'))
import Cropper from 'cropperjs/dist/cropper'
// preview the file funciton 
// not beinn executed at all
window.previewFile = function ()
{
	var preview = document.getElementById('avatar')
	var file_input = document.getElementById('profile_avatar')
	var file = file_input.files[0]

	var reader = new FileReader()

	reader.addEventListener('load', function (event) {
		preview.src = reader.result
	}, false)

	if (file)
	{
		reader.readAsDataURL(file)
	}


	// set the cropper to the image
	// XXX: @todo
	setInterval(function () {
		new Cropper(preview, {
			aspectRatio: 1/1,
			crop: function (e) {
				// console.log(event)
			}
		});
	}, 100)
	

}
