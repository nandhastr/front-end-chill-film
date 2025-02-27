import AuthForm from "../components/Auth/AuthForm";

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{ backgroundImage: "url('/img/background.jpg')" }} className="min-h-screen bg-cover bg-center flex items-center justify-center">
            <AuthForm
                title="Masuk"
                subtitle="Selamat Datang Kembali"
                buttonText="Masuk"
                isLogin={true}
                onSubmit={handleSubmit} />
            
        </div>
    );
};

export default Login;
