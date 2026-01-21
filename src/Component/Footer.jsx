
import React from "react"

const Footer = () =>
    <footer className="page-footer font-small blue pt-4 bg-black text-white">
        <div className="container-fluid text-center text-md-left">
            <div className="flex-col flex sm:flex-row justify-evenly">
                <div className="col-md-6 mt-md-0 mt-3 justify-items-start">
                    <h5 className="text-uppercase">GetProduct! — Shop smart. Live better.</h5>
                    <p>Quality products, secure payments, and a seamless shopping experience—all in one place.</p>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4 justify-evenly">
                        <a href="https://github.com/KeshavKaushik07" target="_blank" rel="noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.29 3.438 9.773 8.205 11.364.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.776.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 3.003-.404c1.02.005 2.047.138 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.652.242 2.873.12 3.176.77.84 1.232 1.91 1.232 3.22 0 4.61-2.805 5.624-5.476 5.92.43.37.815 1.1.815 2.22 0 1.605-.015 2.898-.015 3.293 0 .32.216.694.825.576C20.565 22.27 24 17.79 24 12.5 24 5.87 18.63 0.5 12 0.5z" />
                            </svg>
                        </a>

                        <a href="https://www.linkedin.com/in/keshav-kaushik-789a0036b/" target="_blank" rel="noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.43c-1.12 0-2.03-.91-2.03-2.03 0-1.12.91-2.03 2.03-2.03s2.03.91 2.03 2.03c0 1.12-.91 2.03-2.03 2.03zM20.45 20.45h-3.5v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.66h-3.5V9h3.36v1.56h.05c.47-.88 1.62-1.8 3.34-1.8 3.57 0 4.23 2.35 4.23 5.41v6.28z" />
                            </svg>
                        </a>

                        <a href="mailto:keshavkaushik955@gmail.com" target="_blank" rel="noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current cursor-pointer">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>


                    </div>
                </nav>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2020 Copyright: GetProduct!.com
        </div>

    </footer>

export default Footer