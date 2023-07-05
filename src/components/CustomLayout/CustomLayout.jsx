import { Avatar } from "@mui/material"

const CustomLayout = ({ children }) => {
    return (
        <>
            <main>
                <header className="top-0 left-0 h-16 w-full pl-2 px-4 flex justify-between items-center z-[100] bg-sky-400 shadow-md">
                    <div className="text-lg font-bold text-white shadow-sm">User Management</div>
                    <div>
                        <Avatar
                            // sx={{ width: 80, height: 80 }}
                            style={{ textAlign: 'center' }}
                            alt='Profile Picture'
                        />
                    </div>
                </header>
                <div className="container p-5">{children}</div>
            </main >
        </>
    )
}

export default CustomLayout