export const CloudinaryProperty = async (imageData) => {
  let formData = new FormData();
    formData.append('file',imageData)
    formData.append('upload_preset','profile')
      try{
       let result = await fetch('https://api.cloudinary.com/v1_1/dgxbyse13/image/upload',{
          method:"POST",
          body : formData
        })
        result = await result.json()

        return result
      } catch (error){
        console.log('error')
        return false
      }

}
