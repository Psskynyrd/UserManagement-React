const CustomLayout = ({ children }) => {
    return (
        <>
            <main>
                <header className="top-0 left-0 h-16 w-full pl-2 flex justify-between items-center z-[100] bg-sky-400 shadow-md">
                    <div className="text-lg font-bold text-white shadow-sm">User Management</div>
                </header>
                <div className="container p-5">{children}</div>
            </main >
        </>
    )
}

export default CustomLayout