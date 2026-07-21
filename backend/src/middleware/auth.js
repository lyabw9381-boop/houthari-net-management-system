function checkPermission(permission){

    return (req,res,next)=>{

        const user = req.headers.user;

        if(!user){

            return res.status(401).json({
                message:"غير مصرح بالدخول"
            });

        }


        const permissions =
        JSON.parse(user).permissions;


        if(
            !permissions.includes(permission)
        ){

            return res.status(403).json({

                message:"ليس لديك صلاحية"

            });

        }


        next();

    };

}


module.exports = checkPermission;
