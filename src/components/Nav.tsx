import ThemeToggle from './ThemeToggle';

import logo from '../../assets/logo/busylink_white.svg';

export default function Nav() {
    return (
        <div class="navbar bg-base-100">
            <div class="flex-1">
                <a href='https://busylink.io' class="btn btn-ghost text-xl">
                    <img src={logo} style={{height: "160px"}} alt='busylink.io logo' />
                </a>
            </div>
            {/*
            <div class="flex-none">
                <ul class="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul class="bg-base-100 rounded-t-none p-2">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
            /*/}
            <div class="flex-none">
                <ThemeToggle />
            </div>
        </div>
    )
}
