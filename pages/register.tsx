import { NextPage } from "next"

const register: NextPage = ()=>{
    return(
        <div>
            <form action="http://localhost:5000/api/users/register" method="post">
                <div className="flex flex-col gap-2">
                <label htmlFor="">Roll No: </label>
                <input type="text" name="rollNo" id="" />
             <input type="submit" value="Register"></input>
                </div>
                

            </form>
        </div>
    )
}

export default register;