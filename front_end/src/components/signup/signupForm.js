function SignupForm(props){
    return (
        <form className="flex flex-col justify-center items-center bg-gray-700" onSubmit={props.handleSubmit}>
            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="username">
                    User Name
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="username"
                value={props.username}
                placeholder="User Name"
                onChange={props.handleUsername} />
            </div>

            <div className="mb-6 md:w-1/3">
                <label 
                className="block text-white font-bold text-xl md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="password">
                    Password
                </label>
            </div>
            <div className="mb-6 md:w-1/3">
                <input 
                className="bg-gray-200 appearance-none border-2 border-gray-700 rounded w-full py-2 px-4 text-black leading-tight focus:outline-none focus:bg-white focus:border-lime-400"
                type="username"
                value={props.password}
                placeholder="Password"
                onChange={props.handlePassword} />
            </div>
            
            <div className="flex flex-col justify-center items-center md:auto">
                <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full"><a href="/payrolllist">SIGN UP</a></button>
            </div>
            <a className="text-xl text-center text-white underline underline-offset-8 hover:text-green-500" href="/login">Already registered? Click here.</a>
        </form>
    )
}
export default SignupForm