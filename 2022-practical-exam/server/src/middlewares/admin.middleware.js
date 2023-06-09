
export default function (req, res, next){
    if(!req.user.role == "admin") return res.status(401).send("Access denied! You must be an admin to use this route!")
    next()
}