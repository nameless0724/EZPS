//import "./homepage.css";
import main from '../image/main.svg';
import signup from '../image/signup.svg';
import login from '../image/login.svg';

function HomePage() {
    return (
        <div className="bg-gray-700">
            <div className="flex flex-wrap place-content-center mx-auto md:auto">
                <div>
                    <img className="md:auto" src={main} alt="main" width="500" height="512"></img>
                </div>
                <div>
                    <h1 className="text-5xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">EZPS</h1>
                </div>
                <div>
                    <p className="text-3xl text-white">Easy Pay Slip access anytime.<br /> Anywhere.<br /> At your most convient.</p>
                </div>
            </div>
            <div className="container grid grid-cols-2  mx-auto">
                <div className="max-w-sm p-6 bg-gray-700 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="display:block" src={signup} alt="signup"></img>
                    <h3 className="text-3xl text-center text-white">Haven't registered yet?</h3>
                    <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full"><a href="/signup">SIGN UP</a></button>
                </div>
                <div className="max-w-sm p-6 bg-gray-700 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img className="display:block" src={login} alt="login"></img>
                    <h3 className="text-3xl text-center text-white">Welcome back!</h3>
                    <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full"><a href="/login">LOG IN</a></button>
                </div>
            </div>
        </div>
    )    
}

export default HomePage 