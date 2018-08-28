axios({
  method: 'post',
  url: 'http://localhost:5000/saveinfo',
  data: {
    firstName,
    lastName,
    phone: phoneNumber,
    etc
  }, 
}).then(res => {
  console.log(res)
})
