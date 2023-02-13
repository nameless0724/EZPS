import main from '../image/main.svg';
import login from '../image/login.svg';

function HomePage() {
    return (
        <div className="bg-gray-700">
            <div className="flex flex-wrap place-content-center mx-auto md:auto">
                <div>
                    <img className="md:auto" src={main} alt="main" width="500" height="512"></img>
                </div>
                <div className="mt-10">
                    <h1 className="text-5xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">EZPS</h1>
                    <p className="text-3xl text-white">Easy Pay Slip access anytime.<br /> Anywhere.<br /> At your most convient.</p>
                </div>
            </div>
            
            <div className="flex flex-wrap place-content-center mx-auto md:auto">
                <div className="mt-20">
                    <h3 className="text-3xl text-center text-white">Welcome back!</h3><br />
                    <div className="flex flex-col justify-center items-center md:auto">
                        <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full"><a href="/login">LOG IN</a></button>
                    </div><br />
                    <a className="text-xl text-center text-white underline underline-offset-8 hover:text-green-500" href="/signup">Haven't registered yet? Click here.</a>
                </div>
                <div>
                    <img className="display:block" src={login} alt="login" width="445" height="445"></img>
                </div>
            </div>
        </div>
    )    
}

export default HomePage 

/*<div className="max-w-sm p-6 bg-gray-700 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
<img className="display:block" src={signup} alt="signup"></img>
<h3 className="text-3xl text-center text-white">Haven't registered yet?</h3>
<div className="flex flex-col justify-center items-center md:auto">
    <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full"><a href="/signup">SIGN UP</a></button>
</div>
</div>

<div className="flex flex-wrap place-content-center mx-auto md:auto">
                <div className="max-w-sm p-6 bg-gray-700 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <div></div>
                    <img className="display:block" src={login} alt="login"></img>
                    <h3 className="text-3xl text-center text-white">Welcome back!</h3>
                    <div className="flex flex-col justify-center items-center md:auto">
                        <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full"><a href="/login">LOG IN</a></button>
                    </div>
                </div>
            </div>
*/