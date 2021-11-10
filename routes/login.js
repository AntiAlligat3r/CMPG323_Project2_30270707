
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');



submit.addEventListener('click',test)






router.post('/check',(req,res) =>{
    const body = req.body
    console.log("button pressed")
    getUser(body.email,body.password)
    console.log(body.email)
})


