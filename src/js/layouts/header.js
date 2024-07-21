const header = `
<nav class="fixed top-0 left-0 w-full bg-sky-800 text-white p-3 shadow-md z-20">
    <div class="container mx-auto flex justify-between items-center">
        <a href="#" class="font-bold text-xl">Logo</a>
        <div class="lg:hidden">
            <button @click="open = !open" class="text-white focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
        <ul class="hidden lg:flex space-x-4">
            <li><a href="#" class="hover:underline" id="dashboard">Dashboard</a></li>
            <li><a href="#" class="hover:underline" id="out">Salir</a></li>
        </ul>
    </div>
</nav>
`;

export default header;