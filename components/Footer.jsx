
const Footer = () => {
    return (
        <footer className="bg-dark text-light flex flex-col justify-between p-6 text-sm mt-16 w-auto h-80">
            <p className="selection:bg-light selection:text-dark">Developed by <a target='github' className="underline hover:opacity-70" href="https://github.com/adeirjunior">Adeir Junior</a></p>
            <p className="selection:bg-light selection:text-dark text-right">He would like a <a target='kofi' className="underline hover:opacity-70" href="https://ko-fi.com/F1F45NX9N">Coffe</a></p>
        </footer>
    )
}

export default Footer;