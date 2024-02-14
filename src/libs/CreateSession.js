export const CreateSession =async (input,session) => {
    const role = String(input.current.value)
    if (role.length > 3) {
        const user = {
            sub : session.user.sub,
            username : session.user.name,
            email : session.user.email,
            role : role,
            image_profile : session.user.image,
            class : []
        }
        await fetch('/api/user/create',{
            method: "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                "data" : user
            })
        });
    }
}