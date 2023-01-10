//import "./homepage.css";
import main from '../image/main.svg';
import signup from '../image/signup.svg';
import login from '../image/login.svg';

function HomePage() {
    return (
        <div className="bg-gray-700">
            <img className="md:auto" src={main} alt="main" width="500" height="512"></img>
            <div className="container mx-auto">
                <h1 className="content-start text-5xl text-left font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-lime-400 to-green-500">EZPS</h1>
                <p className="text-3xl text-left text-white">Easy Pay Slip access anytime.<br /> Anywhere.<br /> At your most convient.</p>
            </div>
            <div className="container mx-auto">
                <div className="max-w-sm p-6 bg-gray-700 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img src={signup}></img>
                    <h3 className="text-3xl text-center text-white">Haven't registered yet?</h3>
                    <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full"><a href="/signup">SIGN UP</a></button>
                </div>
                <div className="max-w-sm p-6 bg-gray-700 border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <img src={login}></img>
                    <h3 className="text-3xl text-center text-white">Welcome back!</h3>
                    <button className="bg-lime-400 hover:bg-green-500 text-black font-bold py-2 px-4 rounded-full"><a href="/login">LOG IN</a></button>
                </div>
            </div>
        </div>
    )    
}

export default HomePage 